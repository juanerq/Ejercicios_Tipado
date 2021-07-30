//---------------[ Los principios de POO con TypeScript ]--------------//

/*
¿ Qué es la programación orientada a objetos ?
Es un "paradigma de progración" que busca abstraer la lógica para encapsularla en objetos

Principios de la programación orientada a objeto:
● Abstracción:
  Capacidad de abstraer algo hacia nuestro codigo para convertirlo en una clase. 
● Encapsulamiento:
  Proteger nuestras propiedades del acceso no autorizado.
● Herencia:
  Heredar las cualidades de una clase.
● Polimorfismo:
  Clases distintas que comparten mismos métodos y propiedades, pueden comportarse de manera indiferente.
*/

//---------[ Abstracción ]
class Car {
    //propiedades
    year: number;
    model: string;
    color: string;
//----[ Encapsulamiento ]
    private _fuel: number;

    constructor(model:string, year:number, color:string, fuel:number){
        this.year = year;
        this.model = model;
        this.color = color;
//----[ Encapsulamiento ]
        this._fuel = fuel;
    }

    //metodos
    start(): void {
        
    }   

    acelerate(): void {

    }

    stop(): void {

    }
    //Metodo get para visualizar la propiedad 
    get fuel() {
        return this._fuel;
    }
}

//Intancia
let car = new Car("Car1", 2021, "Morado", 10);

car.start();
car.acelerate();
car.stop();

//----[ Encapsulamiento ]
//car.fuel = 11; ----> NO SE PUEDE MOTIFICAR la propiedad (solo con el metodo get & set).


//----[ Herencia ]
class Ferrari extends Car {
    openSunroof(){

    }
    closeSunroof(){

    }
}

class Porsche extends Car {

}

let ferrari = new Ferrari("Fer-rari", 2021, "Amarillo", 17);
let porsche = new Porsche("Pors-che", 2021, "Rojo", 13);

//Solo se podria trabajar con las dos instancias(ferrari & porsche) siempre y cuando compartan las mismas propiedades y metodos.
function getModel1(car:Ferrari) {
    console.log(car.model);
}

getModel1(ferrari);
//A "porsche" le faltan las siguientes propiedades del tipo 'Ferrari': 
//openSunroof, closeSunroof
getModel1(porsche);

//Debemos acceder directamente a la clase Padre.
function getModel2(car:Car) {
    console.log(car.model);
}

getModel1(ferrari);
getModel2(porsche);



