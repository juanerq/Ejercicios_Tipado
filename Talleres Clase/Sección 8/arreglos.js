//1. Dado el siguiente arreglo:
// let array = [ [1, 2, 3],7, [4, 5, 6], [7, 8, 9] ];

//Iterar por todos los elementos del arreglo utilizando while y mostrarlos en pantalla.

// let i = 0;
// let j = 0;
// while(i < array.length){
//     while(j < array[i].length){
//         console.log(array[i][j]);
//         j++;
//     }
//     i++;
//     j = 0;
// }

//Iterar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.

// for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//         console.log(array[i][j]);
//     }
// }

//Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1. Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal cual se piden.

// let arrayNuevo = [];
// for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//         arrayNuevo.push(array[i][j] + 1);
//     }
// }
// console.log(arrayNuevo);

//Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo.

// let array2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// let suma = 0;
// for(let i = 0; i < array2.length; i++){
//     if(array2[i] == "number"){
//         suma += array2[i];  
//     }
//     for(let j = 0; j < array2[i].length; j++){
//         suma += array2[i][j];
//     }
// }
// let promedio = suma / array2.length;
// console.log(promedio);

//2. Programe una función que permita encontrar el número menor contenido en una matriz recibida como parámetro.

arrayMenor = [ [1, 2, 3],0, [4, 5, 6], [7, 8, 9] ];
let numero = arrayMenor[0][0];
for(let i = 0; i < arrayMenor.length; i++){
    if(arrayMenor[i] < numero){
        numero = arrayMenor[i];
    }
    for(let j = 0; j < arrayMenor[i].length; j++){
        if(arrayMenor[i][j] < numero){
            numero = arrayMenor[i][j];
        }
    }
}
console.log(numero);
