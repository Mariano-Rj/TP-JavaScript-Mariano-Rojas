let cantidadArticulos = parseInt(prompt("Ingrese la cantidad de articulos adquiridos."))

let precioTotal = parseInt(prompt("Ingrese el precio total a pagar"))

if (cantidadArticulos <= 0 && precioTotal <= 0) {
    console.log("Ingresa numeros mayores a 1 para la cantidad de articulos y el precio.");
} else {

    switch (true) {
        case cantidadArticulos >= 10 && precioTotal > 20000:
            descuento = precioTotal - (precioTotal * 0.15);
            console.log("Se aplico un descuento del 15%. Precio con descuento:", descuento )
            break;
        default:
            console.log("No se supero la cantidad o el precio para aplicar el descuento.");
            break;
    }
}