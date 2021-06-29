//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.

//PRIMERA FORMA:
//El IVA del 19 lo escribo 1.19

let precio_producto1 = parseFloat(prompt("Ingrese el valor del producto uno"));
const IVA1 = 1.19
let precio_final1 = precio_producto1 * IVA1
console.log("El precio final del producto con el IVA del 19% es ", precio_final1);


//SEGUNDA FORMA:
//Utilizando el 19%

let precio_producto2 = parseFloat(prompt("Ingrese el valor del producto dos"));
const IVA2 = 19;
let precio_parcial2 = (precio_producto2 * IVA2) / 100;
let precio_final2 = precio_parcial2 + precio_producto2
console.log("El precio final del producto con el IVA del 19% es ", precio_final2);

//TERCERA FORMA:
//Utilizando e 19% pero solo en un proceso

let precio_producto3 = parseFloat(prompt("Ingrese el valor del producto tres"));
const IVA3 = 19;
let precio_final3 = precio_producto3 + ((precio_producto3 * IVA3)/100)
console.log("El precio final del producto con el IVA del 19% es ", precio_final3);


