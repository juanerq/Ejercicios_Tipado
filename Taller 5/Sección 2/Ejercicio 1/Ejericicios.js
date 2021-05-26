/*
1. Cree un programa que tome la base y la altura de un triángulo e imprima su área. 
*/

function encontrarArea(base, altura){

    let area = base * altura / 2;
    return area;
}

let resultado = encontrarArea(4, 7);

console.log(`El area del triangulo es ${resultado}`);


