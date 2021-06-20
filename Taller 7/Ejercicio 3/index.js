/*
3. Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50.
*/

let numero = 50;
let contador = 1;

while(contador <= numero){
    let multiplicar = contador * 10;
    console.log(`${contador} x 10 = ${multiplicar}`);
    contador++; 
}
