//----------------------------------[ Ejercicio 1 ]----------------------------------------
//Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de tal manera que la función retorne la longitud(número de elementos) del arreglo.

// let array = [1, 2, 3, 4, 5];

// let sacarLongitud = (arreglo) => arreglo.length;
// let longitud = sacarLongitud(array);
// console.log(longitud);


//----------------------------------[ Ejercicio 2 ]----------------------------------------
//2. Dado los siguientes arreglos arreglo1 = [ [“A”, “B”, “C”], [“D”, “E”, “F”], [“G”, “H”, “I”] ] y arreglo2 = [ [“J”, “K”, “L”], [“M”, “N”, “O”], [“P”, “Q”, “R”] ] , use ciclos para intercambiar los elementos de los arreglos. 


let array1 = [ ["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"] ];
let array2 = [ ["J", "K", "L"], ["M", "N", "O"], ["P", "Q", "R"] ];

let reemplazar = (array1, array2) =>{
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array1[i].length; j++){
            let copia = array1[i][j];
            array1[i][j] = array2[i][j]; 
            array2[i][j] = copia;
        }
    }
    console.log(array1);
    console.log(array2);
}
 
reemplazar(array1, array2);

//----------------------------------[ Ejercicio 3 ]----------------------------------------
//Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado.

let arreglo = [1, 2, 3, 4, 5];

//forEach con funcion flechita
let suma = 0
arreglo.forEach(index => {
    let cuadrado = index * index;
    suma += cuadrado;
});
console.log(suma);

//funcion flechita - for normal
let fechitaCuadrado = (arreglo) =>{
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        let cuadrado = arreglo[i] * arreglo[i];
        suma = suma + cuadrado;
    }
    console.log(suma);
}
fechitaCuadrado(arreglo);

//funcion normal - for normal
function sumarCuadrados(arreglo){
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        let cuadrado = arreglo[i] * arreglo[i];
        suma = suma + cuadrado;
    }
    return suma;
}
let resultado = sumarCuadrados(arreglo);
console.log(resultado);



