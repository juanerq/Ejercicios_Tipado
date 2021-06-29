/*1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.*/

// const productos = {
//     chocolatina: 400,
//     gomita: 200,
//     galletas: 600,
//     bonbonbum: 300,
//     chicle: 200
// };

// let usuario = prompt(`Elija un producto de la tienda:
// - chocolatina
// - gomita
// - bonbonbum
// - chicle`);

// usuario = usuario.toLowerCase();

// if(typeof(productos[usuario]) == "undefined"){
//     alert(`El producto no existe, eligelo nuevamente`);
// }else{
//     alert(`${usuario}: ${productos[usuario]}`);
// }

/*2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos.*/

// const usuarios = {
//     D01: "Alejandro",
//     D02: "Camila",
//     D03: "Diana",
//     D04: "Elena",
//     D05: "Fernanda",
//     D06: "Henry",
//     D07: "Juan",
//     D08: "Kevin",
//     D09: "Maria",
//     D10: "Samantha"
// };

// console.log("Los nombres de los usuario son:");
// for(const key in usuarios){
//     console.log(usuarios[key]);
// }

/*3. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco países del continente seleccionado por el usuario. Use diccionarios. Use ciclos.*/

// const CONTINENTES = {
//     america:{1:"Argentida", 2:"Canada", 3:"Colombia", 4:"Brasil", 5:"EE.UU"},
//     africa: {1:"Egipto", 2:"Etiopia", 3:"Nigeria", 4:"Sudafrica", 5:"Kenia"},
//     europa: {1:"Alemania", 2:"España", 3:"Francia", 4:"Italia", 5:"Rusia"},
//     asia: {1:"Corea", 2:"China", 3:"India", 4:"Iran", 5:"Japon"},
//     oseania: {1:"Australia", 2:"Nueva Zelanda", 3:"Nauru", 4:"Palaos", 5:"Samao"}
// };

// let nombre = prompt(`Elija unos de los 5 contientes:
// America
// Africa
// Europa
// Asia
// Oseania`);

// console.log(`Los paises del continente de ${nombre} son: `);
// for(const KEY in CONTINENTES[nombre]){
//     console.log(CONTINENTES[nombre][KEY]);
// }

/*4. Cree un programa que cumpla con los siguientes requerimientos: 
En una clínica, se requiere un programa donde el usuario pueda consultar el día de su cita mediante su documento. 
La cita debe tener día y fecha. 
Si el usuario consulta, el programa debe mostrarle sus nombres, seguidos del día y hora de su cita. 
Una vez hecha la consulta, el programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el cambio solicitado ha sido exitoso. Use diccionarios.*/


const CITA = {
    D01: {nombre:"Isaac Newton", dia: "Lunes", fecha: "20/06/2021", hora: "6:00 am"},
    D02: {nombre:"Juan Reyes", dia: "Miercoles", fecha: "20/06/2021", hora: "8:00 am"},
    D03: {nombre:"Fernanda Velásquez", dia: "Viernes", fecha: "20/06/2021", hora: "1:00 pm"}
};

let identi = prompt("Ingrese su numero de documento");

alert(`Nombre: ${CITA[identi]["nombre"]} 
Dia: ${CITA[identi]["dia"]}
Hora: ${CITA[identi]["hora"]}`);

let cambiar = prompt("¿Desea hacer un cambio? Si o No");

if(cambiar.toLowerCase() == "si"){
    cambiar = prompt("¿Desea cambiar el dia o la fecha de su cita?");
    if(cambiar == "dia"){
        CITA[identi]["dia"] = prompt("Ingrese el dia de su cita");
        alert("Cambio exitoso");
    }else if(cambiar == "fecha"){
        CITA[identi]["dia"] = prompt("Ingrese la fecha de su cita");
        alert("Cambio exitoso");
    }else{
        alert("error");
    }
}else{

}




