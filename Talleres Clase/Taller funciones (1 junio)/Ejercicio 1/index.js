/* 1. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el promedio de todos los números.*/

function promedio(num1, num2){
    let pizza = 0;
    let suma = 0;
    while(num1 <= num2){
        suma = pizza + num1;
        pizza = suma; 
        num1++;
    }
    let division = pizza / num2;
    return division;
}

let resultado = promedio(9, 2);
console.log(`El promedio de los numeros datos es: ${resultado}`);
