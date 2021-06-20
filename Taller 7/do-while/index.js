/*
7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero. do-while
*/

let numeros = 1; 
let sustituto = 0;
let contador = 0;

do{
    numeros = parseInt(prompt("Dame un numero natural"));
    let suma = numeros + sustituto;
    sustituto = suma;
    console.log(numeros);
    contador++;

}while(numeros != 0);

let resultado = sustituto / (contador - 1) ;
console.log(resultado);