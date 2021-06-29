/*
6. Cree un programa que calcule el promedio de 10 números. 
*/

let contador = 1;
let final = 10;
let sustituto = 0;
let resultado;

while(contador <= final){
    let numero = parseInt(prompt(`Numero ${contador} de 10`)); 
    let suma = numero + sustituto;
    sustituto = suma;

    if(contador == final){
        resultado = sustituto / 10;
    }
    contador++;
}

console.log(`El promedio de los numeros dados es ${resultado}`);
