/*
4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.
*/

function factorial(numero){
    let multiplicador = 1;
    
    for(let contador = 1; contador <= numero; contador++){     
        operacion = contador * multiplicador;
        multiplicador = operacion;

    }
    if(numero == 0){
        return 1;
    }
    return operacion;
}

let resultado = factorial(9);
console.log(resultado);

