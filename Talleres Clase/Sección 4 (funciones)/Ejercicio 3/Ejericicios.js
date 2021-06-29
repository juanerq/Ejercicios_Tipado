/*
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. 
*/

function divisiblePorCinco(numero){
    let mensaje;
    if(numero % 5 == 0){
        mensaje = `El numero ${numero} es divisible por 5`;
        return mensaje;
    }else{
        mensaje = `El numero ${numero} no es divisible por 5`;
        return mensaje;
    }
}

let resultado = divisiblePorCinco(25);
console.log(resultado);

