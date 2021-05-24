/*
3. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let numero = parseInt(prompt("Dame un numero"));

//if

if(numero % 5 == 0){
    console.log("El numero ", numero, " es divisible por cinco");
}else{
    console.log("El numero ", numero, " no es divisible por cinco");
}

//switch

switch(numero % 5){
    case 0: console.log("El numero ", numero, " es divisible por cinco");
        break;

    default: console.log("El numero ", numero, " no es divisible por cinco"); 
        break;   
}
