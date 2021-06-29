/*
4. Cree un programa que muestre los números impares entre 1 y n. 
*/

let contador = 1;
let numero = parseInt(prompt("Deme un numero limite"));

while(contador <= numero){
    if(contador % 2 != 0){
        console.log(`El numero ${contador} es impar`);
    }
    contador++;
}