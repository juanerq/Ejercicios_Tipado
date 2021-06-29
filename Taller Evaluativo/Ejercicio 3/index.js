//-----------------------------[ Ejercicio: 3 ]-------------------------------//
//a) Usando ciclo for recorra el arreglo imprimiendo cada uno de sus elementos.

let arreglo= [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

//b) Usando forEach recorra el arreglo imprimiendo cada uno de sus elementos.

arreglo.forEach(elemento => console.log(elemento));