let listaTarea = [
    "---Administrador de Tareas---",
    "1. Agregar Tarea",
    "2. Listar Tarea",
    "3. Editar Tarea",
    "4. Eliminar Tareas"
];

let tareas = [];

function mostrarMenu() {
    let listaVertical = parseInt(prompt(listaMenu.join("\n")))
    while(listaVertical!==5){
        switch (listaVertical){
            case 1:
                agregarTarea();
                break;
            case 2:
                listarTareas();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            default:
                alert("Opcion no valida")
                break;
        }
        listaVertical = parseInt(prompt(listaMenu.join("\n")));
    }
}

function agregarTarea(){
    let tarea = prompt("Ingrese una tarea: ");
    if (tarea && tarea.trim()) {
        tarea.push(tarea);
        alert("Tarea agregada: "+ tarea)
    }else {
        alert("ingrese una tarea valida");
    }
}






mostrarMenu()