//-----------------------------[ Ejercicio: 1 ]-------------------------------//
//Realice el mismo algoritmo usando otra estructurade control más conveniente.

let edad = 15;  

// if(edad == 15){
//     console.log("Tiene 15");
// }else if(edad == 20){
//     console.log("Tiene 20");
// }else if(edad == 30){
//     console.log("Tiene 30");
// }else{
//     console.log("Introduzca una edad válida");
// }

switch(edad){
    case 15: console.log("Tiene 15"); 
        break;
    case 20: console.log("Tiene 20");
        break;
    case 30: console.log("Tiene 30");      
        break;
    default: console.log("Introduzca una edad válida");
}