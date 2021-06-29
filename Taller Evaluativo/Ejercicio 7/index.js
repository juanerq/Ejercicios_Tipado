//-----------------------------[ Ejercicio: 7 ]-------------------------------//
//Dado el siguiente arreglo [1, 2, 3, 4, 500, 420,-100] elimine el elemento de índice 4 usando splice,elimine el último elemento usando pop, agregue elelemento 520 usando push. Finalmente, haga una copia “independiente del arreglo” usando slice

let array = [1, 2, 3, 4, 500, 420,-100];
console.log(`original: ${array}`);

let array2 = array.slice();
console.log(`slice: ${array2}`);

array.splice(4,1);
console.log(`splice: ${array}`);

array.pop();
console.log(`pop: ${array}`);

array.push(520);
console.log(`push: ${array}`);
