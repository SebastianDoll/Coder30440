let nombreProductoA = "Mesa"
let precioProductoA = 1000
let stockProductoA = 10

let nombreProductoB = "Silla"
let precioProductoB = 500
let stockProductoB = 100

let nombreProductoC = "Lampara"
let precioProductoC = 100
let stockProductoC = 1000

let nombreProductoD = "Lapices"
let precioProductoD = 5
let stockProductoD = 10000

let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n- Mesa\n- Silla\n- Lampara\n- Lapices")
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}

function sumaIva(precio){
    return precio * 1.21
}

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Mesa\n- Silla\n- Lampara\n- Lapices")
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 == "Mesa"){
        calculoStock(cantidad1, stockProductoA, precioProductoA)
    }
    else if(compra1 == "Silla"){
        calculoStock(cantidad1, stockProductoB, precioProductoB)
    }
    else if(compra1 == "Lampara"){
        calculoStock(cantidad1, stockProductoC, precioProductoC)
    }
    else if(compra1 == "Lapices"){
        calculoStock(cantidad1, stockProductoD, precioProductoD)
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