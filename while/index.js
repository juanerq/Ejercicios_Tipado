// let contraseña = prompt("Deme una contraseña");
// let confirmar = prompt("Confirme su contraseña");


// while(contraseña != confirmar){
//     confirmar = prompt("Las contraseñas no coinciden. Inténtelo de nuevo.")
// }

// alert("Contraseña confirmada. ¡Hasta la vista!");



// let cantidad = parseFloat(prompt("¿Cuántos euros quiere ahorrar?"));   
// let dinero = 0;
// let operacion = 0;

// while(dinero <= cantidad){
//     dinero = parseFloat(prompt("¿Cuántos euros quiere meter en la hucha?"));
//     console.log(dinero);
//     dinero = dinero + operacion;
//     operacion = dinero;
// }
// console.log(`¡Objetivo conseguido! Ha ahorrado usted ${operacion}`);


// let cantidad = parseFloat(prompt("¿Cuántos euros quiere ahorrar?"));   
// let dinero = 0;
// let operacion = 0;

// while(dinero < cantidad){
//     dinero = parseFloat(prompt("¿Cuántos euros quiere meter en la hucha?"));
//     if(dinero < 0){
//         alert("Por favor, escriba una cantidad positiva");
//     }else{
//         console.log(dinero);
//         dinero = dinero + operacion;  
//         operacion = dinero;
//     }
    
// }
// console.log(`¡Objetivo conseguido! Ha ahorrado usted ${operacion}`);    



// let contraseña = prompt("Deme una contraseña");
// alert("Tiene 3 intentos para confirmar su contraseña.");
// let confirmar = prompt("Confirme su contraseña");
// let intentos = 1;

// while(contraseña != confirmar && intentos <= 3){
//     confirmar = prompt("Las contraseñas no coinciden. Inténtelo de nuevo.")
//     intentos++;
    
// }

// if(intentos == 3){
//     alert("Lo siento, no ha confirmado la contraseña. ¡Hasta la vista!");    
// }else{
//     alert("Contraseña confiramada. ¡Hast la vista!");
// }



/*
Escriba un programa que pida la cantidad de números positivos que se tienen que escribir y a continuación pida números hasta que se haya escrito la cantidad de números positivos indicada.
*/

// let repeticion = parseInt(prompt("Escriba la cantidad de números positivos a escribir:"));
// let contador = 1;
// let resta = 0;

// //repeticion = 3

// while(repeticion <= 0){
//     repeticion = parseInt(prompt("La cantidad debe ser mayor que 0. Inténtelo de nuevo:"));
// }

// while(contador <= repeticion){
//     let usuario = parseInt(prompt("Escriba un número:"));  // 1  -2   3  -4  5

//     if(usuario < 0){
//         resta = contador - 1;                              // 3
//         repeticion = repeticion + 1;                       // 5
//     }   
//     console.log(usuario );
//     contador++;                                           // 6
// }
// console.log(`Ha escrito ${repeticion} números, ${resta} de ellos positivos.`);


let cantidadNumeros = parseInt(prompt("Escriba la cantidad de números positivos a escribir:"));
let numeros = 0;
let contadorPositivos = 0;
let contador = 0;

while(contadorPositivos < cantidadNumeros || cantidadNumeros <= 0){
    if(cantidadNumeros <= 0){
        cantidadNumeros = parseInt(prompt("La cantidad debe ser mayor que 0. Inténtelo de nuevo:"));
        console.log(`La cantidad debe ser mayor que 0. Inténtelo de nuevo: ${cantidadNumeros}`);
    }else{
        numeros = parseInt(prompt("Escriba un número:"));
        console.log(`Escriba un número: ${numeros}`);
        if(numeros > 0){
            contadorPositivos++;

        }
        contador++;
    }
}
console.log(`Ha escrito ${contador} números, ${contadorPositivos} de ellos positivo.`);

