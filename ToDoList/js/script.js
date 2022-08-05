//Obtengo la referencia al boton de agregar y le asigno el evento click
let addButton = document.getElementById('add-button')
addButton.addEventListener("click", addToDoItem)


//Obtengo las referencias a el input y el contenedor de la lista de tareas
let toDoEntryBox = document.getElementById("todo-entry-box")
let toDoList = document.getElementById("todo-list")

//Declaro el event handler del boton agregar donde obtengo el valor que ingresa el usuario en el input
function addToDoItem(){
    let itemText = toDoEntryBox.value
    newToDoItem(itemText, false)
}

//Declaro la funcion que genera el elemento que contendra la tarea a agregar y le asigno un event listener que permite "completar" esa tarea
function newToDoItem(text, completed){

    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    if(completed){
        toDoItem.classList.add("completed")
    }

    toDoList.append(toDoItem)
    toDoItem.addEventListener("click", toggleItemState)
}

//Declaro el event handler que cambia una tarea a "completada" o a "vigente"
function toggleItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    }
    else {
        this.classList.add("completed")
    }
}

//Funcionalidad para eliminar las tareas ya completadas
let clearButton = document.getElementById("clear-completed-button")
clearButton.addEventListener("click", clearCompletedItems)

function clearCompletedItems(){

    let completedItems = toDoList.getElementsByClassName("completed")
    console.log(completedItems)
    while(completedItems.length > 0) {
        completedItems.item(0).remove()
    }
}

//Funcionalidad para eliminar todas las tareas de la lista
let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click", emptyList)

function emptyList(){
    toDoList.innerHTML = ""
}

//Funcionalidad para guardar la lista en localStorage

let saveButton = document.getElementById("save-button")
saveButton.addEventListener("click", saveList)

function saveList(){

    let toDos = [];

    for(let i = 0; i < toDoList.children.length; i++){
        let toDo = toDoList.children.item(i)

        let toDoInfo = {
            task: toDo.innerText,
            completed: toDo.classList.contains("completed")
        }

        toDos.push(toDoInfo)
    }

    localStorage.setItem("listaTareas", JSON.stringify(toDos))
}

function loadList(){

    let listaTareas = JSON.parse(localStorage.getItem("listaTareas"))

    for(let i = 0; i < listaTareas.length; i++){
        newToDoItem(listaTareas[i].task, listaTareas[i].completed)
    }
}
loadList()