//Diseña un programa que, dado un numero entero, determine si  ́este es el doble de un numero impar. (Ejemplo: 14 es el doble de 7, que es impar.)

// function encontrarImpar(numero){
//     let operacion = parseInt(numero / 2);
    
//     if(operacion % 2 != 0){
//         let enunciado = `${numero} es el doble de ${operacion}, que es impar`;
//         return enunciado;
//     }
// }

// let resultado = encontrarImpar(18);
// console.log(resultado);


// Disena un programa que, dados dos numeros enteros, muestre por pantalla uno de estos mensajes:
// ((El segundo es el cuadrado exacto del primero.)),((El segundo es menor que el cuadrado del primero.)) o ((El segundo es mayor que el cuadrado del primero.)), dependiendo de la verificacion de la condici ́on correspondiente al significado de cada mensaje.

// function verificarCuadrado(primero, segundo){
//     let cuadrado = primero * primero;

//     if(segundo == cuadrado){
//         return "El segundo es el cuadrado exacto del primero";
//     }else if(segundo < cuadrado){
//         return "El segundo es menor que el cuadrado del primero";
//     }else if(segundo > cuadrado){
//         return "El segundo es mayor que el cuadrado del primero";
//     }   
// }

//Un capital de C euros a un interes del x por cien anual durante n años se convierte en C·(1 + x/100)n euros. Diseña un programa JavaScript que solicite la capital C y el interes x y calcule el capital final solo si x es una cantidad positiva.

// function calcularCapitalFinal(capital, interes, tiempo){
//     let capitalFinal;

//     if(interes > 0){
//         capitalFinal = capital*(1+interes/100)**tiempo;
//         return `${capitalFinal} euros`;
//     }
// }

// let resultado =  calcularCapitalFinal(50000, 2, 2);
// console.log(resultado); 

//Realiza un programa que calcule el desglose en billetes y monedas de una cantidad exacta de euros. Hay billetes de 500, 200, 100, 50, 20, 10 y 5 euros y monedas de 2 y 1 euros.

let cantidad = parseInt(prompt("numero"));

if(cantidad >= 500){
    let resultado = procedimiento(cantidad, 500);
    console.log(resultado);
    cantidad = modulo(cantidad, 500);
     
}
if(cantidad >= 200){
    resultado = procedimiento(cantidad, 200);
    console.log(resultado);
    cantidad = modulo(cantidad, 200);
     
}
if(cantidad >= 100){
    resultado = procedimiento(cantidad, 100);
    console.log(resultado);
    cantidad = modulo(cantidad, 100);
     
}
if(cantidad >= 50){
    resultado = procedimiento(cantidad, 50);
    console.log(resultado);
    cantidad = modulo(cantidad, 50);
     
}
if(cantidad >= 20){
    resultado = procedimiento(cantidad, 20);
    console.log(resultado);
    cantidad = modulo(cantidad, 20);
     
}
if(cantidad >= 10){
    resultado = procedimiento(cantidad, 10);
    console.log(resultado);
    cantidad = modulo(cantidad, 10);
     
}
if(cantidad >= 5){
    resultado = procedimiento(cantidad, 5);
    console.log(resultado);
    cantidad = modulo(cantidad, 5);
     
}
if(cantidad >= 2){
    resultado = procedimiento(cantidad, 2);
    console.log(resultado);
    cantidad = modulo(cantidad, 2);
     
}
if(cantidad >= 1){
    resultado = procedimiento(cantidad, 1);
    console.log(resultado);
    cantidad = modulo(cantidad, 1);
     
}

function procedimiento(cantidad, billetes){
    let division = parseInt(cantidad / billetes);
    return `${division} billetes de ${billetes} euros`;
}

function modulo(cantidad, billetes){
    return cantidad = parseInt(cantidad % billetes);
}



