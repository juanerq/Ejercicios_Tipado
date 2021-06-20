/*
8. Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n
*/

let numeros = 1;
let final = parseInt(prompt("Dame un numero limite"));
let sustituto = 0;

while(numeros <= final){
    let operacion = numeros * numeros;
    let suma = sustituto + operacion;
    sustituto = suma;

    numeros++;
}
console.log(`La suma de los cuadrados da como resultado ${sustituto}`);
