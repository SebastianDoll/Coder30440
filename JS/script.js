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



function suma(num1, num2){
    return num1 + num2 
}

function mensaje(resultado){
    console.log(resultado)
}

mensaje('Bienvenidos al mundo de las sumas')

/* suma(2, 6)
suma(8, 24) */

/* let numeroA = parseInt(prompt("Ingresa el primer numero:"))
let numeroB = parseInt(prompt("Ingresa el segundo numero:")) */

let numeroTotal = suma(2, 3)
mensaje(numeroTotal)