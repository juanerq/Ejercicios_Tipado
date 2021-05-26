/*
2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
*/

function encontrarArea(PI, radio){
    let area = PI * (radio * radio);
    return area;
}

let resultadoArea = encontrarArea(3.1416, 5);
console.log(`El area del circulo es ${resultadoArea}`);


function encontrarPerimetro(PI, radio){
    let perimetro = 2 * PI * radio;
    return perimetro;
}

let resultadoPerimetro = encontrarPerimetro(3.1416, 5);
console.log(`El perimetro del circulo es ${resultadoPerimetro}`);

