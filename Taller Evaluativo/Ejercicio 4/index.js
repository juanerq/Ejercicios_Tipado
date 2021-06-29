//-----------------------------[ Ejercicio: 4 ]-------------------------------//
//Dado el siguiente diccionario: Usando for in itere sobre las claves del objeto imprimiendo sus respectivos valores.
//Cambie el valor de la clave peso por 77 usando:
//forma 1: (arreglo.clave) Cambie el valor de la clave edad por 21 usando  
//forma 2: (diccionario[clave]) Elimine la clave apellidos

let persona = {
    edad:20,
    peso:75,
    nombres:"Pedro",
    apellidos:"Pérez Pérez"
};

for(const propiedad in persona){
    console.log(propiedad, persona[propiedad]);
}

persona.peso = 77;
persona["edad"] = 21;

delete persona["apellidos"];

console.log(persona);