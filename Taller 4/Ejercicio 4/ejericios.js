/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let numero = parseInt(prompt("Dame un numero del 1 al 15"));
let esPrimo = false;

//if

if(numero == 2){
    console.log("El numero ", numero, "es primo");
    esPrimo = true;
}
if(numero == 3){
    console.log("El numero ", numero, "es primo");
    esPrimo = true;
}
if(numero == 5){
    console.log("El numero ", numero, "es primo");
    esPrimo = true;
}
if(numero == 7){
    console.log("El numero ", numero, "es primo");
    es = true;
}
if(numero == 11){
    console.log("El numero ", numero, "es primo");
    esPrimo = true;
}
if(numero == 13){
    console.log("El numero ", numero, "es primo");
    esPrimo = true;
}

if(esPrimo){ 
}else{
    console.log("El numero ", numero, "no es primo");
}

//switch

switch(numero){
    
    case 2: console.log("El numero ", numero, "es primo");
        break;
    case 3: console.log("El numero ", numero, "es primo");
        break;  
    case 5: console.log("El numero ", numero, "es primo");
        break;  
    case 7: console.log("El numero ", numero, "es primo");
        break;
    case 11: console.log("El numero ", numero, "es primo");
        break;
    case 13: console.log("El numero ", numero, "es primo");
        break;
        
    default: console.log("El numero ", numero, "no es primo");
        break;    
}