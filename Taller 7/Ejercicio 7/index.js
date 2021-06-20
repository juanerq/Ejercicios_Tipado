/*
7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.
*/

let numeros = 3; 
let sustituto;
let contador = 0;

while(numeros != 0){
    
    numeros = parseInt(prompt("Dame un numero natural"));   

    let suma = numeros + sustituto;                         
    sustituto = suma;                                       

    contador++;                                             
}

let resultado = sustituto / (contador - 1);
console.log(resultado);

