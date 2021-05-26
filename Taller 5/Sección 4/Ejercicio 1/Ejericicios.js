/*
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function verificarTriangulo(angulo1, angulo2, angulo3){
    let mensaje;
    let suma = angulo1 + angulo2 + angulo3;
    if(suma == 180){
        mensaje = "La suma de los angulos corresponden a la de un triangulo";
        return mensaje;
    }else{
        mensaje = "La suma de los angulos no corresponden a la de un triangulo";
        return mensaje;
    }
}

let resultado = verificarTriangulo(60, 60, 60);
console.log(resultado);

