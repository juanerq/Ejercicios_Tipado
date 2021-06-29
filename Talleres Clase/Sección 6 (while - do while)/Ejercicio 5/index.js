/*
5. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.
*/

//Opción 1

let salida = prompt("Desea salir \n S = salir \n N = seguir");

if(salida == "S" || salida == "s" || salida == "n" || salida == "N"){
    while(salida == "N" || salida == "n"){
        salida = prompt("Desea salir \n S = salir \n N = seguir");
    }
}else{
    alert("Digite la letra correspondiente");
}

//Opción 2

while(salida == "N" || salida == "n"){
    salida = prompt("Desea salir \n S = salir \n N = seguir");
}

if(salida != "S" && salida != "s"){
    alert("Digite la letra correspondiente");
}