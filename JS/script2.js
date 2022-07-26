/* let nombreProductoA = "Mesa"
let precioProductoA = 1000
let stockProductoA = 10 */

/* let productoA = {
                    nombre: "Mesa",
                    precio: 1000,
                    stock: 10,
                    marca: {
                        nombre: "a",
                        material: "madera"
                    }
} */

function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.sumarIva = function (){
        this.precio = this.precio * 1.21
    }
    this.sumarStock = function (cantidad){ this.stock += cantidad}
}


/* class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    sumarIva(){
        return this.precio * 1.21
    }
    sumarStock(cantidad){ 
        this.stock += cantidad
    }
    
} */

const productoA = new Producto("Mesa", 1000, 10)
const productoB = new Producto("Silla", 500, 100)
const productoC = new Producto("Lampara", 100, 1000)
const productoD = new Producto("Lapices", 5, 10000)
const productoE = new Producto("Ventana", 100, 1000)
const productoF = new Producto("PC", 5, 10000)

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]

/* productoA.sumarIva()
productoB.sumarIva()

productoD.sumarStock(cantidad1) */

/* let nombreProductoB = "Silla"
let precioProductoB = 500
let stockProductoB = 100 */

/* let nombreProductoC = "Lampara"
let precioProductoC = 100
let stockProductoC = 1000

let nombreProductoD = "Lapices"
let precioProductoD = 5
let stockProductoD = 10000 */

let nombresProductos = listaProductos.map((producto) => producto.nombre)

/* function listarProductos(){
    for(const producto of listaProductos){
        nombresProductos.push(producto.nombre)
    }
}
listarProductos() */

let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar:\n " + nombresProductos.join("\n "))
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}



for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n ")).toLowerCase()
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 == productoA.nombre.toLowerCase()){
        calculoStock(cantidad1, productoA)
    }
    else if(compra1 == "Silla"){
        calculoStock(cantidad1, productoB)
    }
    else if(compra1 == "Lampara"){
        calculoStock(cantidad1, productoC)
    }
    else if(compra1 == "Lapices"){
        calculoStock(cantidad1, productoD)
    }
    else{
        alert("No tenemos ese producto")
    }
}

switch(true){
    case precioTotal < 2000 || precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal < 5000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal < 10000:
        precioTotal = precioTotal * 0.80
        alert("Recibiste un descuento del 20% por tu compra")
        break;
    case precioTotal > 10000:
        alert("Recibiste un descuento del 40% por tu compra")
        precioTotal = precioTotal * 0.60
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros");
        break;
}



let precioToTalConImpuestos = sumaIva(precioTotal)

alert("Este es el precio total final con impuestos de tu compra: " + precioToTalConImpuestos)