//Cree un programa que lea el monto de un préstamo y el plazo en meses, y muestre al usuario el valor de las cuotas mensuales pagando un interés fijo del 2.7% mensual.

//PRIMERA FORMA
//Haciendo el cambio manual del porcentaje 2.7%, seria 1.027

let prestamo = parseInt(prompt("Ingrese el valor del préstamo uno"));
let plazo_en_meses= parseInt(prompt("Ingrese a cuántas cuotas"));
const INTERES_FIJO= 1.027
let cuota_mensual = parseInt((prestamo / plazo_en_meses) * INTERES_FIJO)

console.log("El valor de la cuota mensual pagando un interes fijo del 2.7% mensual es ", cuota_mensual);


//SEGUNDA FORMA:
//Utilizando el 2.7%


let prestamo2 = parseInt(prompt("Ingrese el valor del préstamo dos"));
let plazo_en_meses2= parseInt(prompt("Ingrese a cuántas cuotas"));
const INTERES_FIJO2= 2.7
let interes_del_prestamo2 = (prestamo2 * INTERES_FIJO2) /100;
let precio_final2 = parseInt((prestamo2 + interes_del_prestamo2) /plazo_en_meses2);

console.log("El valor de la cuota mensual pagando un interes fijo del 2.7% mensual es ", precio_final2);
