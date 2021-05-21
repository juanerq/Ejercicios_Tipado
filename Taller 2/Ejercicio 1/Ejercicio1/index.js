//1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro de tantos años como este indique. Por ejemplo, si el usuario tiene 20 años y quiere saber cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.

let edad = parseInt(prompt("Ingrese su edad"));
let nueva_edad= parseInt(prompt("¿Cuántos años desea sumarle para conocer su edad?"));
let resultado = edad + nueva_edad;
console.log("Usted tendrá ", resultado, "años");
