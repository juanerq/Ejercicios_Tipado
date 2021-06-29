/*
2. Cree un programa que calcule la suma de los primeros n números naturales. 
*/

let n = parseInt(prompt("Deme un numero limite"))       
let numero = 1;
let resultado = 0;
let operacion;

if(n < 0){
    n = n * -1;
}

while (numero <= n) {
    operacion = numero + resultado;  
    resultado = operacion;        
    numero++;               
}

console.log(`La suma de los primeros ${n} numeros naturales es: ${operacion}`);