/* 3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.*/

function intervaloMedio(num1, num2){
    let intervalo = num1 + num2;
    let puntoMedio = intervalo / 2;
    return puntoMedio;
}

let resultado = intervaloMedio(2, 9);
console.log(`El punto mdeio del intervalo es ${resultado}`);