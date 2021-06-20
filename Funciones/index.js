/*
1. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el promedio de todos los números.
2. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.
3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.
*/

/*
1. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el promedio de todos los números.
*/

// function promedio(num1, num2){
//     let pizza = 0;
//     let suma = 0;
//     while(num1 <= num2){
//         suma = pizza + num1;
//         pizza = suma; 
//         num1++;
//     }
//     let division = pizza / num2;
//     return division;
// }

// let resultado = promedio(9, 2);
// console.log(`El promedio de los numeros datos es: ${resultado}`);

/*
2. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.
*/

// function numeroMayor(num1, num2){
//     if(num1 <= num2){
//         while(num1 <= num2){
//             console.log(num1);
//             num1++;
//         }
//         console.log(`El numero mayor es ${num2}`);
//     }else{
//         while(num2 <= num1){
//             console.log(num2);
//             num2++;
//         }
//         console.log(`El numero mayor es ${num1}`);
//     }
// }

// let resultado = numeroMayor(9, 2);
// console.log(resultado);

/*
3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.
*/

function intervaloMedio(num1, num2){
    let intervalo = num1 + num2;
    let puntoMedio = intervalo / 2;
    return puntoMedio;
}

let resultado = intervaloMedio(2, 9);
console.log(`El punto mdeio del intervalo es ${resultado}`);