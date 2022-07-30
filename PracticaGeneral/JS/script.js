// Primera Clase:

/* let nombre = prompt("Ingrese su nombre:");
alert("Bienvenido " + nombre) */

//Segunda Clase:

/* let edad = parseInt(prompt("Ingrese su edad:")) */
/* let nombre = prompt("Ingrese su nombre:") */


/* if(edad >= 18){
    alert("Sos mayor de edad!")
}
else{
    alert("No sos mayor de edad")
}

if (nombre == 'Coder'){
    alert("Bienvenido " + nombre)
} */

/* let precio = parseInt(prompt("Ingrese el precio:"))

if (precio < 20) {
 alert("El precio es menor que 20");
}
else if (precio < 50) {
 alert("El precio es menor que 50");
}
else if (precio < 100) {
 alert("El precio es menor que 100");
}
else if(precio > 100){
    alert("El precio es mayor que 100");
   }
else {
 alert("No ingresaste un precio en numeros");
}

console.log("Listo!") */

/* let nombreIngresado = prompt("Ingresar nombre");


if(((nombreIngresado !="") && (nombreIngresado == "EMA")) || (nombreIngresado =="ema")){
 alert("Hola Ema");
}else{
 alert("Error: Ingresar nombre valido");
} */

/* let nombreIngresado = ''

let numero = 20

for(let i = 0 ; i <= numero ; i++){

    console.log(i)
    if(i == 2 || i == 4){
        continue;
    }
    if(i == 10){
        break;
    }

    /* nombreIngresado = prompt("Ingrese su nombre:")
    alert("Bienvenido " + nombreIngresado + "." + "\nSu turno es el N:" + i)
} */

/* alert("Nos quedamos sin turnos por hoy") */




/* if (precio < 20) {
 alert("El precio es menor que 20");
}
else if (precio < 50) {
 alert("El precio es menor que 50");
}
else if (precio < 100) {
 alert("El precio es menor que 100");
}
else if(precio > 100){
    alert("El precio es mayor que 100");
   }
else {
 alert("No ingresaste un precio en numeros");
} */

/* let precio = parseInt(prompt("Ingrese el precio:"))

switch(true){
    case precio < 20:
        alert("El precio es menor que 20");
        break;
    case precio < 50:
        alert("El precio es menor que 50");
        break;
    case precio < 100:
        alert("El precio es menor que 100");
        break;
    case precio > 100:
        alert("El precio es mayor que 100");
        break;
    default:
        console.log(precio)
        alert("No ingresaste un precio en numeros");
        break;
} */

//10 === true

/* function saludar() {
    console.log("¡Hola alumnos!");
}
saludar()
saludar()
console.log("¡Hola estudaintes!");
console.log("¡Hola estudia!");
saludar() */



/* function suma(num1, num2){
    return num1 + num2
}

function mensaje(resultado){
    console.log(resultado)
}

mensaje('Bienvenidos al mundo de las sumas') */

/* suma(2, 6)
suma(8, 24) */

/* let numeroA = parseInt(prompt("Ingresa el primer numero:"))
let numeroB = parseInt(prompt("Ingresa el segundo numero:")) */

/* let numeroTotal = suma(2, 3)
mensaje(numeroTotal) */

/* let productoA = {
    nombre: "Mesa",
    precio: 1000,
    stock: 10
} */


/* function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

const productoB = new Producto("Silla", 500, 100)
const productoC = new Producto("Lampara", 100, 1000)
const productoD = new Producto("Lapices", 5, 10000)

console.log(productoB)
console.log(productoA) */



/* let nombre = prompt("Ingrese su nombre: ") */
//           0     1     2     3      4       5       6    7      8
/* let lista = [5, "Coder", 80, true, "House", "Coder", 80, true, "House"]

lista.splice(5, 1)
lista.splice(2, 1) */


/* lista.push(nombre)
lista.unshift("Nuevo elemento") */

/* for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
} */

/* function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
*/
/* let total = 0

function acumular(num){
    total =+ num
} */

/* function sumar(a, b){
    return a + b
}
let total = sumar(3, 8) + sumar(4 , 5)

console.log(total) */

//console.log(sumar(4 , 5))

/* const numeros = [1, 2, 3, 4, 5, 6]

porCadaUno(numeros, console.log)

porCadaUno(numeros, (num) => { total =+ num })

numeros.forEach( (num) => { total =+ num }) */

/* function porCadaUno(numeros, console.log) {
    for (const elemento of numeros) {
        console.log(elemento)
    }
} */

/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
   ]

const resultado = cursos.filter((el) => el.precio < 20000)

console.log(resultado) */

/* let titulo = document.getElementById("titulo")

console.log(titulo)

let paises = document.getElementsByClassName("paises")

console.log(paises)

let paisesTag = document.getElementsByTagName("li")

titulo.innerText = "Chau Coders!"

paises[2].innerText = "EU"

let contenedor = document.getElementById("contenedor")

contenedor.innerHTML = '<h4>Bienvenidos</h4><span>Como estan?</span>'

contenedor.className = "changedContainer"

let nuevoPais = document.createElement("li")

nuevoPais.innerText = "MX"
nuevoPais.className = "paises"

let lista = document.getElementById("lista")

lista.append(nuevoPais)

let subtitulo = document.getElementById("subtitulo")

subtitulo.remove() */

/* let boton = document.getElementById("boton1") */

/* boton.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("Click!")
} */

/* boton.addEventListener("click", () => console.log("Click!")) */

/* boton.addEventListener("keydown", () => console.log("Click!")) */

/* boton.onclick = () => console.log("Click!") */

/* let input = document.getElementById("nombre")

input.addEventListener("input", () => console.log(input.value)) */

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", validateForm)

function validateForm(event){
    event.preventDefault()

    let form = event.target

    console.log(form[0].value)
    console.log(form[1].value)

    console.log("Enviado!")
}

/* let boton = document.getElementById("boton1")

boton.addEventListener("click", clickHandler)

function clickHandler(){

    let container = document.getElementById("listaMensajes")

    container.innerHTML = ""

    let mensaje = document.createElement("h2")
    mensaje.innerText = "Su mensaje ha sido enviado!"

    container.append(mensaje)

} */

