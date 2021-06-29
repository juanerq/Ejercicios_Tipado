/*
2. Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones. 
0 x 3 = 0
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
...
*/     

function multiplicarTres(inicio, final, multiplicar){

    for(let numero = inicio; numero <= final; numero++){
    
        let resultado = numero * multiplicar;
        console.log(`${numero} x ${multiplicar} = ${resultado}`);
    }
}

let total = multiplicarTres(0, 50, 3);
console.log(total2);

































// function multiplicarTres(inicio, final){
//     for(let index = inicio; index <= final; index++){
//         operacion = index * 3;
//         console.log(`${index} x 3 = ${operacion}`);
//     }
//     return operacion;
// }

// let resultado = multiplicarTres(0, 50);
// // console.log(resultado);
