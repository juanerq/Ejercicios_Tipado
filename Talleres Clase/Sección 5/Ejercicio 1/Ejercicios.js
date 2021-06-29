/*
1. Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use ciclo for. Use funciones. 
*/

function ascendenteDescendente(inicio, final){
    for(let index = inicio; index <= final; index++){
        console.log(index);
    }
    for(let i = final; i >= inicio; i--){
        console.log(i);
    }
}

let resultado = ascendenteDescendente(0, 100);
console.log(resultado);
