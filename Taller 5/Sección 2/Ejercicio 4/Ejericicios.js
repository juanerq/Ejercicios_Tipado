/*
4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
*/

function precioFinalProducto(producto){
    let precioFinal = producto * 0.19 + producto;
    return precioFinal;
}

let resultado = precioFinalProducto(1000);
console.log(`El precio final del producto es ${resultado}`);

