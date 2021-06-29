/*
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.
*/

function parImpar(numero){
    let mensaje;
    if(numero % 2 == 0){
        mensaje = `El numero ${numero} es par`;
        return mensaje;
    }else{
        mensaje = `El numero ${numero} es impar`;
        return mensaje;
    }
}

let resultado = parImpar(8);
console.log(resultado);

