import { Component, OnInit } from '@angular/core';
import { TareasService, Tarea } from './services/tareas.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  formularioTarea!: FormGroup;
  editando: boolean = false;
  tareaIdActual?: number;
  listaTareas: Tarea[] = [];
  mensajeAccion: string = '';
  tipoMensaje: string = 'success';
  filtroEstado: string = ''; // Variable para almacenar el filtro seleccionado
  tareasFiltradas: Tarea[] = []; // Lista de tareas filtradas

  constructor(private fb: FormBuilder, private tareaService: TareasService) {}

  ngOnInit(): void {
    this.formularioTarea = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      estado: [false],
    });
    this.obtenerTareas();
  }
  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe((tareas) => {
      this.listaTareas = tareas;
      this.tareasFiltradas = tareas;
    });
  }
  getEstadoTexto(estado: any): string {
    return estado === false ? 'Pendiente' : 'Completado';
  }
  // Cargar tarea en el formulario para editar
  cargarTareaParaEditar(tarea: Tarea): void {
    this.editando = true;
    this.tareaIdActual = tarea.id;
    this.formularioTarea.setValue({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      estado: tarea.estado,
    });
  }

  cerrarMensaje() {
    this.mensajeAccion = '';
  }

  // Mostrar mensaje de éxito o error
  mostrarMensaje(mensaje: string, tipo: 'success' | 'danger' | 'warning') {
    this.mensajeAccion = mensaje;
    this.tipoMensaje = tipo;

    setTimeout(() => {
      this.cerrarMensaje();
    }, 3000);
  }

  // Guardar tarea (crear o actualizar)
  guardarTarea(): void {
    const tareaDatos: Tarea = this.formularioTarea.value;

    if (this.formularioTarea.valid) {
      if (this.editando && this.tareaIdActual !== undefined) {
        // Editar tarea existente
        this.tareaService
          .actualizarTarea(this.tareaIdActual, tareaDatos)
          .subscribe(() => {
            this.mostrarMensaje('Tarea actualizada correctamente', 'warning');
            this.reiniciarFormulario();
            this.obtenerTareas();
          });
      } else {
        // Crear nueva tarea
        this.tareaService.crearTarea(tareaDatos).subscribe(() => {
          this.mostrarMensaje('Tarea creada correctamente', 'success');
          this.reiniciarFormulario();
          this.obtenerTareas();
        });
      }
    }
  }
  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.listaTareas = this.listaTareas.filter((tarea) => tarea.id !== id);
      this.mostrarMensaje('Tarea eliminada correctamente', 'danger');
      this.obtenerTareas();
    });
  }

  // Reiniciar formulario
  reiniciarFormulario(): void {
    this.editando = false;
    this.tareaIdActual = undefined;
    this.formularioTarea.reset({ estado: false });
  }
  filtrarTareas() {
    if (this.filtroEstado === '') {
      this.tareasFiltradas = this.listaTareas;
    } else {
      const estadoFiltro = this.filtroEstado === 'true' ? true : false; // Convertir a booleano
      this.tareasFiltradas = this.listaTareas.filter(
        (tarea) => Boolean(tarea.estado) === estadoFiltro
      );
    }
  }
}
