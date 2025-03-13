# 📌 Frontend de Gestión de Tareas

## 🚀 Descripción

Este es un proyecto frontend desarrollado en **Angular 19** para gestionar tareas, permitiendo crear, editar y eliminar tareas a través de una API en .NET.

## 🛠️ Tecnologías Utilizadas

- **Angular 19** - Framework principal.
- **TypeScript** - Lenguaje de programación.
- **Bootstrap** - Estilos y diseño responsivo.
- **RxJS** - Manejo de peticiones HTTP y estados reactivos.

## 📂 Estructura del Proyecto

```
📁 tareasfront
 ┣ 📁 src
 ┃ ┣ 📁 app
 ┃ ┃ ┣ 📁 services
 ┃ ┃ ┃ ┗ 📄 tareas.service.ts
 ┃ ┃ ┗ 📄 app.component.html
 ┃ ┃ ┗ 📄 app.component.scss
 ┃ ┃ ┗ 📄 app.component.ts
 ┃ ┃ ┗ 📄 app.config.ts
 ┃ ┣ 📁 environments
 ┃ ┃ ┣ 📄 environments.prod.ts
 ┃ ┃ ┣ 📄 environments.ts
 ┃ ┣ 📄 main.ts
 ┃ ┗ 📄 index.html
 ┣ 📄 angular.json
 ┣ 📄 package.json
 ┣ 📄 README.md
```

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/ingdanielleo/tareasfront.git
cd tareasfront
```

### 2️⃣ Instalar dependencias

```sh
npm install
```

## 🔗 Funcionalidades

- 📌 **Crear tareas** con título, descripción y estado.
- ✏️ **Editar tareas** desde el mismo formulario.
- ❌ **Eliminar tareas** con confirmación.
- 🔍 **Filtrar tareas** por estado (pendiente/completado).
- 📄 **Notificaciones** de acciones en la interfaz.

## 📌 Componentes principales

- **`app.component.ts`**: Maneja la lógica de la UI y las interacciones con el usuario.
- **`tarea.service.ts`**: Servicio encargado de realizar las peticiones HTTP a la API en .NET.

## 🏆 Autor

Desarrollado por **Jorge Daniel Leon Prieto** | 🚀 2025
