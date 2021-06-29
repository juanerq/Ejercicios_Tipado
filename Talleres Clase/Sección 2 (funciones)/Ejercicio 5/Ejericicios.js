/*
5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
*/

function precioDescuento(producto){
    let precioFinal = producto - 0.10 * producto;
    return precioFinal;
}

let resultado = precioDescuento(5000);
console.log(`El precio del producto con descuento del 10% es ${resultado}`);
