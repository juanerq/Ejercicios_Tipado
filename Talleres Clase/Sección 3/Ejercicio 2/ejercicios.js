/* En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.
*/

let producto = prompt("Escoje el numero del producto:\n1. Lentejas\n2. Crema\n3. Arroz\n4. Vino");

console.log(producto)

if(producto == "1" || producto == "3"){
    console.log("Este producto no paga IVA");
}else if(producto == "2" || producto == "4"){
    console.log("Este producto si paga IVA");
}else{
    alert("ingrese el numero del producto");
}
