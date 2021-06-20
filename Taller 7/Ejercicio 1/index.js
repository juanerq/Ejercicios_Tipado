/*
1. Cree un programa que muestre los números naturales de 1 a n. Use ciclo while. */

let numero = 1;
let n = parseInt(prompt("Igrese un numero limite"));

if(n < 0){
    n = n * -1;
}

while(numero <= n){
    console.log(numero);
    numero++; 
}