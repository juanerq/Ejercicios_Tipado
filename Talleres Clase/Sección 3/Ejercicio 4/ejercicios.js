/* Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales también se debe mostrar al usuario.
*/

let numero1 = parseInt(prompt("Dame el primer numero"));
let numero2 = parseInt(prompt("Dame el segundo numero"));
let numero3 = parseInt(prompt("Dame el tercer numero"));

if(numero1 >= numero2 && numero1 >= numero3){
    console.log(numero1);
}else if(numero2 >= numero1 && numero2 >= numero3){
    console.log(numero2);
}else if(numero3 >= numero1 && numero3 >= numero2){
    console.log(numero3);
}else if(numero1 == numero2 && numero1 == numero3){
    console.log("son iguales");
}else{
    alert("Solo puede ingresar numeros");
}