/*
1. Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado.

2. Cree una función que tenga por parámetro un arreglo de números y muestre el mayor y el menor de ello*/

//.length = para saber la cantidad de lementos
// i = indice/index
// los arrays empiezan contando desde 0 (indice)

// arreglo.length = 4
// 1 + 0
// 4 + 1
// 9 + 5
// 25 + 14

//cuadrado = 25
//suma = 39

// let array = [1, 2, 3, 5];

// function sumaCuadrados(arreglo){
//     let suma = 0;
//     for(let i = 0; i < arreglo.length; i++){
//         let cuadrado = arreglo[i] * arreglo[i];
//         suma = cuadrado + suma;
//     }
//     return suma;
// }

// let resultado = sumaCuadrados(array);
// console.log(resultado);

/*2. Cree una función que tenga por parámetro un arreglo de números y muestre el mayor y el menor de ellos*/


// let array = [2, 7, 20, 9, 1, 10];
// let contador = 0;

// for(let i = 0; i < array.length; i++){
//     if(array[contador] < array[i]){
//         contador = i;
//     }
// }

// console.log(array[contador]);

let array = [2, 7, 20, 9, 1, 0];
let contador = 0;

for(let i = 0; i < array.length; i++){
    if(array[contador] > array[i]){
        contador = i;
    }
}

console.log(array[contador]);

let array = [2, 5, 7, 9];
let numero = array[0];

function EncontrarMayor(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > numero){
            numero = arreglo[i];
        }
    }
    return numero;
}


function EncontrarMenor(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] < numero){
            numero = arreglo[i];
        }
    }
    return numero;
}

let mayor = EncontrarMayor(array);
let menor = EncontrarMenor(array);

console.log(numero);