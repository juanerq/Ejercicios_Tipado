//Cree un programa que tome un número real e imprima su valor absoluto.

let numero = parseFloat(prompt("Ingrese el número"))
let resultado;
if(numero < 0 ){
    resultado = numero * -1
}else{
    resultado = numero
}


alert(resultado)