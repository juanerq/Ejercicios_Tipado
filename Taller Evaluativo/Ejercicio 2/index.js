//-----------------------------[ Ejercicio: 2 ]-------------------------------//
//Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por consola.

function numeroMayor(num1, num2){
    if(num1 > num2){
        return `El numero ${num1} es mayor que ${num2}`;
    }else if(num2 > num1){
        return `El numero ${num2} es mayor que ${num1}`;
    }else{
        return `El numero ${num2} es igual que ${num1}`;
    }
}

let valorRetorno = numeroMayor(16, 9);
console.log(valorRetorno);