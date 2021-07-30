"use strict";
/*Declare e inicialice:*/
//● Dos variables lógicas
let frio = true;
let calor = false;
//● Dos variables numéricas
let edad = 19;
let año = 2021;
//● Dos variables any
let hijo = "Pardo Reyes Montoya";
let horasDia = 24;
//● Dos variables string
let amiga = "Fer";
let novia = "Camila";
/*● Cree una plantilla de strings para mostrar un mensajede bienvenida al usuario luego de registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por registrarte”. Este template debe usar dos variables,nombresyapellidos.*/
let nombre = "Juan";
let apellido = "Reyes";
console.log(`Bienvenida ${nombre} ${apellido} a nuestro sitio web, gracias por registrarte`);
//---------------------------------------------------------------------------------------//
//● Una variable array de números que contenga cinco elementose imprima cada uno de suselementos.
let cumpleaños = [2002, 26, 2, 2003, 4, 10];
cumpleaños.forEach(value => {
    console.log(value);
});
//● Una variable array de strings que contenga cinco elementose imprima cada uno de sus elementos.
let vegetales = ["zanahoria", "espinca", "tomate", "cebolla", "cilantro"];
vegetales.forEach(value => {
    console.log(value);
});
//● Recorra cada array creado usando for-of e imprimiendo cada uno de sus elementos
for (const index of cumpleaños) {
    console.log(index);
}
for (let index of vegetales) {
    console.log(index);
}
//---------------------------------------------------------------------------------------//
//● Una variable tipo objeto cuyos valores sean los días de la semana
let diasSemana = {
    Dia1: "Domingo",
    Dia2: "Lunes",
    Dia3: "Martes",
    Dia4: "Miercoles",
    Dia5: "Jueves",
    Dia6: "Vierne",
    Dia7: "Sabado"
};
//● Una variable tipo objeto cuyos valores sean los númerosdel 0 al 9
let numeros = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9 };
//● Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores
for (let index in diasSemana) {
    console.log(diasSemana[index]);
}
for (const index in numeros) {
    console.log(numeros[index]);
}
//---------------------------------[ INVESTIGACIÓN ]---------------------------------//
//Investigue:cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.Implemente ejemplos prácticos.
/*
Eliminar elementos de un array:
● Ultimo elemento...............pop
● Primer elemento...............shisft
● Elemento especifico...........splice
*/
let arrayEliminar = ["Pardo", "Fer", "Camila", "Juan"];
let eliminadoPop = arrayEliminar.pop();
console.log(arrayEliminar, eliminadoPop);
let eliminadoShift = arrayEliminar.shift();
console.log(arrayEliminar, eliminadoShift);
let eliminadoSplice = arrayEliminar.splice(0, 1);
console.log(arrayEliminar, eliminadoSplice);
/*
Agregar elementos
● Ultima posicion...............push
● Primera posicion..............unshift
● Cualquier posicion............splice
*/
let arrayAñadir = ["Juan"];
console.log(arrayAñadir);
arrayAñadir.push("Fer");
console.log(arrayAñadir);
arrayAñadir.unshift("Camila");
console.log(arrayAñadir);
arrayAñadir.splice(1, 0, "Pardo");
console.log(arrayAñadir);
/*
leer y actualizar elementos
● Leer...............array[posicion]
● Actualizar.........array[posicion] = valor;
*/
let arrayLeerActualizar = ["Fer", "Camila", "Juan"];
console.log(arrayLeerActualizar[0]);
arrayLeerActualizar[0] = "Pardo";
console.log(arrayLeerActualizar);
/*Investigue:cómo eliminar elementos clave-valor de un objeto, cómo leer  y actualizar valores. Implemente ejemplos prácticos.*/
let objetoEliminar = {
    Dia1: "Domingo",
    Dia2: "Lunes",
    Dia3: "Martes",
    Dia4: "Miercoles",
    Dia5: "Jueves",
    Dia6: "Vierne",
    Dia7: "Sabado"
};
//Leer
console.log(objetoEliminar["Dia7"]);
//Actualizar
objetoEliminar["Dia8"] = "Sunday";
console.log(objetoEliminar);
//Eliminar
delete objetoEliminar.Dia8;
console.log(objetoEliminar);
/*Investigue: Ciclos for y while en TypeScript. Implementeejemplos prácticos.*/
let numerosWhile = [];
let numero = 1;
while (numerosWhile.length < 10) {
    numerosWhile.push(numero++);
}
console.log(numerosWhile);
let fibonacci = [];
let a = 0;
let b = 1;
let c = 1;
for (let i = 0; i < 10; i++) {
    fibonacci.push(c);
    c = a + b;
    a = b;
    b = c;
}
console.log(fibonacci);
