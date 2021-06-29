/* 2. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.*/

function numeroMayor(num1, num2){
    if(num1 <= num2){
        while(num1 <= num2){
            console.log(num1);
            num1++;
        }
        console.log(`El numero mayor es ${num2}`);
    }else{
        while(num2 <= num1){
            console.log(num2);
            num2++;
        }
        console.log(`El numero mayor es ${num1}`);
    }
}

let resultado = numeroMayor(9, 2);
console.log(resultado);
