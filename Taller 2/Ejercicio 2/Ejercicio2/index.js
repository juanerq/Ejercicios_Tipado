//Cree un programa que tome el radio de un círculo e imprima su área y perímetro.

let radio = parseFloat(prompt("Ingrese el radio"));
const PI = 3.1416
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log("El área del circulo es ", area, "y el perimetro es", perimetro);