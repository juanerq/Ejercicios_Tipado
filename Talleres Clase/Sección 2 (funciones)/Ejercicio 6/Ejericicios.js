/*
6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
*/

function porcentaje(pizza, envio){
    let total = pizza * envio;
    return total;
}

let resultado = porcentaje(5000, 0.10);
console.log(`El porcentaje de la cantidad ingresada es ${resultado}`);

