//-----------------------------[ Ejercicio: 8 ]-------------------------------//
//En una empresa se requiere un sistema de información que registre sus nuevos usuarios. Cada vez que un usuario se registra debe introducir los siguientes datos: 
//documento, nombres, apellidos, edad, peso, estatura. Cree un sistema de información que reciba los datos de registro de cada cliente por teclado, luego de realizado el registro, el sistema debe mostrar al usuario el mensaje “Registro exitoso”.Si el usuario desea consultar su registro debe poder hacerlo a través de su documento.



let usuarios = {};
let informacion = ["documento", "nombres", "apellidos", "edad", "peso", "estatura"];

//Ingresar datos
let pregunta = confirm("Desea registrarse");
if(pregunta){
    let numUsuarios = parseInt(prompt("¿Cuantos usuarios desea registrar?"))
    for(let i = 0; i < numUsuarios; i++){
        for(let j = 0; j < informacion.length; j++){
            informacion[j] = prompt(`${informacion[j]}`);
            
            nuevoUsuario(informacion[0], informacion[1], informacion[2], informacion[3], informacion[4], informacion[5]);
        }
        informacion = ["documento", "nombres", "apellidos", "edad", "peso", "estatura"];  
    }
    alert("Registro exitoso");
} 

//Crear objetos
function nuevoUsuario(documento, nombres, apellidos, edad, peso, estatura){
    usuarios[documento] = {documento: documento, nombres:nombres, apellidos:apellidos, edad:edad, peso:peso, estatura:estatura};
}
// let pregunta = confirm("Desea registrarse");
// if(pregunta){
//     let numUsuarios = parseInt(prompt("¿Cuantos usuarios desea registrar?"))
//     for(let i = 0; i < numUsuarios; i++){
//         let documento = (prompt('Dame tu documento'));
//         let nombres = prompt('Dame tu nombre');
//         let apellidos = prompt('Dame tu apellido');
//         let edad = (prompt('Dame tu edad'));
//         let peso = prompt('Dame tu peso');
//         let estatura = prompt('Dame tu estatura');

//         nuevoUsuario(documento, nombres, apellidos, edad, peso, estatura);
//     }
//     alert('Resgistro exitoso');
// }

//Consultar datos
let documento;
pregunta = confirm("¿Desea consultar su registro?")

if(pregunta){
    documento = prompt("Ingrese su documento");
    mostrarDatos(documento);
}else{
    alert("Registro finalizado")
}


function mostrarDatos(documento){
    alert(
   `Documento: ${usuarios[documento]["documento"]}
    Nombres: ${usuarios[documento]["nombres"]}
    Apellidos: ${usuarios[documento]["apellidos"]}
    Edad: ${usuarios[documento]["edad"]}
    Peso: ${usuarios[documento]["peso"]}
    Estatura: ${usuarios[documento]["estatura"]}`)
}


//Editar los datos
pregunta = confirm("¿Deseas hacer algun cambio?")
if(pregunta){
    pregunta = prompt(`¿Que datos desea editar?
    1. Documento 
    2. Nombres
    3. Apellidos
    4. Edad
    5. Peso
    6. Estatura`)
    editarDatos(pregunta);
    mostrarDatos(documento);
}


function editarDatos(pregunta){
let arrayEditar = pregunta.split(" ");
console.log(arrayEditar);
arrayEditar.forEach(elemento => {
    switch(elemento){
        case "1": usuarios[documento]["documento"] = prompt("Escriba el documento");
            break;
        case "2": usuarios[documento]["nombres"] = prompt("Escriba el nombre");
            break; 
        case "3": usuarios[documento]["apellidos"] = prompt("Escriba el apellido");
            break; 
        case "4": usuarios[documento]["edad"] = prompt("Escriba la edad");
            break;    
        case "5": usuarios[documento]["peso"] = prompt("Escriba el peso");
            break;    
        case "6": usuarios[documento]["estatura"] = prompt("Escriba la estatura");
            break;
        default:
    }
});

}
