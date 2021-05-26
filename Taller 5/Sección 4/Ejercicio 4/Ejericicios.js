/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.
*/

function numPrimos(numero){
    let mensaje = `El numero ${numero} es primo`;
    let mensaje2 = `El numero ${numero} no es primo`;
    
    switch(numero){
        case 2: return mensaje;
            break;
        case 3: return mensaje;
            break;
        case 5: return mensaje;
            break;
        case 7: return mensaje;
            break;
        case 11: return mensaje;
            break;
        case 13: return mensaje;
            break;   
            
        default: return mensaje2;
            break;
    }
}

let resultado = numPrimos(3);
console.log(resultado);