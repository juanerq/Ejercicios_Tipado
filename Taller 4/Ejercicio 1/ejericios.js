/*
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let anguloUno = parseInt(prompt("Dame el primer angulo"));
let anguloDos = parseInt(prompt("Dame el segundo angulo"));
let anguloTres = parseInt(prompt("Dame el tercer angulo"));

//if

let suma = anguloUno + anguloDos + anguloTres;

if(suma == 180){
    console.log("La suma de los tres ángulos corresponden a un triangulo");
}else{
    console.log("La suma de los tres ángulos no corresponden a un triangulo");
}

//switch

switch(suma){
    case 180: console.log("La suma de los tres ángulos corresponden a un triangulo");
        break;
        
    default: console.log("La suma de los tres ángulos no corresponden a un triangulo");
        break;     
}

