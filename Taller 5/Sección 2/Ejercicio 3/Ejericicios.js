/*
3. Cree un programa que tome el lado de un cubo e imprima su volumen. 
*/

function encontrarVolumen(lado){
    let volumen = lado * lado * lado;
    return volumen;
}

let resultado = encontrarVolumen(8);
console.log(`El volumen del cubo es ${resultado}`);

