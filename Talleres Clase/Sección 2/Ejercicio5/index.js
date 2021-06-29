//Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.

let valor_producto = prompt("Ingrese el valor del producto");
const DESCUENTO = 10
let total = valor_producto - ((valor_producto * DESCUENTO)/100)
console.log("El precio final con descuento del 10% es ",total);



