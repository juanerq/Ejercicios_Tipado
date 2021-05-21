//Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.


let valor_producto = prompt("Ingrese el valor del producto");
let descuento = prompt("Ingrese el descuento a aplicar")
let total = valor_producto - ((valor_producto * descuento)/100)
console.log("El precio final con descuento del ", descuento, "% es ",total);