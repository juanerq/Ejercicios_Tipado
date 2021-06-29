/*
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.
*/

let numero = parseInt(prompt("Dame un numero"));

//if

if(numero % 2 == 0){
    console.log("El numero ", numero, " es par");
}else{
    console.log("El numero ", numero, " es impar");
}

//switch

switch(numero % 2){
    case 0: console.log("El numero ", numero, " es par");
        break;

    default: console.log("El numero ", numero, " es impar"); 
        break;   
}

