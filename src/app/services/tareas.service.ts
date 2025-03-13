import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  estado: number; // 0 = Pendiente, 1 = Completado
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  // Crear una nueva tarea
  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  // Actualizar una tarea existente
  actualizarTarea(id: number, tarea: Tarea): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, tarea);
  }

  // Eliminar una tarea
  eliminarTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
