/*
3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones. 

nota1 = 4
nota2 = 3
nota3 = 2
suma = 4 + 3 + 2 = 9
promedio = suma / 3 =  3

*/

let nota1 = 4
let nota2 = 3
let nota3 = 2

for(let notas = 4; notas <= 3; notas++){

    if(notas == 1){
        nota1 = parseInt(prompt(`Ingrese la nota 1`));
    }else if(notas == 2){
        nota2 = parseInt(prompt(`Ingrese la nota 2`));
    }else if(notas == 3){
        nota3 = parseInt(prompt(`Ingrese la nota 3`));
    }
}

function promedio(notaUno, notaDos, notaTres){
    let suma = notaUno + notaDos + notaTres;
    let division = suma / 3;
    return division;
}

let resultado = promedio(nota1, nota2, nota3);

console.log(resultado);
