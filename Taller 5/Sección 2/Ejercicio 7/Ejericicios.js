/*
7. Cree un programa que tome un número real e imprima su valor absoluto.
*/

function valorAbsoluto(numeroReal){
    if(numeroReal < 0){
        let valor = numeroReal * (-1);
        return valor;
    }else{
        return numeroReal;
    }
}

let numero = valorAbsoluto(8.8882);
console.log(`El valor abosoluto es ${numero}`);