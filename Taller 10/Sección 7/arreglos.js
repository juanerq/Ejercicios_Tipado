//----------------------------------[ Ejercicio 1 ]----------------------------------------
//Cree un programa que implemente un arreglo de cuatro elementos(números del 0 al 3) e imprima cada uno en líneas diferentes.

//forEach - función flecha

// let array = [0, 1, 2, 3]
// array.forEach(element => console.log(element));

// //funcion normal - for
// console.log(`forEach y función flecha`);
// function imprimirLineas(arreglo){
//     for(let element = 0; element < arreglo.length; element++){
//         console.log(arreglo[element]);
//     }
// }
// imprimirLineas(array); 


// //funcion flecha - for normal
// let funcionFlecha = (arreglo) => {
//     for(let element = 0; element < arreglo.length; element++){
//         console.log(arreglo[element]);
//     }
// }
// funcionFlecha(array);

//----------------------------------[ Ejercicio 3 ]----------------------------------------
/*Cree un programa que implemente un arreglo de 10 elementos(los dígitos), ordenados de menor
a mayor e imprima cada uno de ellos en el mismo orden en el que se encuentran en el arreglo. Luego, invierta el orden de todos los elementos del arreglo, haciendo que el último pase a ser el primero, el penúltimo pase a ser el segundo, así sucesivamente, e imprima nuevamente cada elemento en el mismo orden en el que ahora se
encuentran en el arreglo.*/



// for(let i = 0; i < array.length; i++){
//     let auxiliar = 0;
//     let contador = 0;
//     for(let j = 1; j < array.length; j++){
//         if(array[contador] > array[j]){
//             auxiliar = array[j];
//             array[j] = array[contador];
//             array[contador] = auxiliar;  
//         }
//             contador++;
//             console.log(1)
//     }
// }
// console.log(array);

let array = [5, 7, 2, 8, 0, -9];
let elementos = array.length;
let contador = 0;
let arrayNew = [];

for(let i = 0; i < elementos; i++){
    for(let j = 0; j < array.length; j++){
        if(array[j] < array[contador]){
            contador = j;
        }
    }
    arrayNew.push(array[contador]);
    array.splice(contador, 1);
    contador = 0;
}
console.log(arrayNew);











//----------------------------------[ Ejercicio 3 ]----------------------------------------
/*Dado el arreglo [1,2,3,4,5,6]
● Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
● Calcular el promedio de todos los elementos del arreglo*/

let array2 = [1, 2, 3, 4, 5, 6];

// //PRIMER PUNTO Y SEGUNDO PUNTO
// let index = 0;
// while(index < array2.length){
//   //array2[index] = array2[index] + 1;
//     array2[index] += 1;
//     console.log(array2[index]);
//     index++;    
// }

// //SEGUNDO PUNTO Y TERCER PUNTO
// for(let i = 0; i < array2.length; i++){
//     array2[i] += 1;
//     console.log(array2[i]);
// }

// //CUARTO PUNTO
// let array2Copia = [];
// for(let i = 0; i < array2.length; i++){
//     array2Copia.push(array2[i] + 1);
// }
// console.log(array2Copia);

//QUINTO PUNTO
//forEach con funcion flechita
// let suma = 0; 
// let promedio;
// array2.forEach(index => { suma += index; });
// promedio = suma/array2.length;
// console.log(promedio);

// //for normal
// suma = 0;
// for(let i = 0; i < array2.length; i++){
//     suma += array2[i];
// }
// promedio = suma/array2.length;
// console.log(promedio);