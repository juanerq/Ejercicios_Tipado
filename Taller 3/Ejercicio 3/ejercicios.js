/* Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales también se debe mostrar al usuario.
*/

let numero1 = parseInt(prompt("Dame el primer numero"));
let numero2 = parseInt(prompt("Dame el segundo numero"));

if(numero1 > numero2){
    console.log(numero1," es mayor que ", numero2);
}else if(numero1 < numero2){
    console.log(numero2," es mayor que ", numero1);
}else if(numero1 == numero2){
    console.log(numero2," es igual que ", numero1);
}else{
    alert("Solo puede ingresar numeros");
}
