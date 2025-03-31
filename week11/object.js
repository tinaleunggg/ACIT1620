/*
Objects - a collections of properties and functions

Class   - blueprint for creating object
    Student - id, name, gender, age, email, phone
            (100, 'Alan', 'm', 20, 'alan@email.com', 2345678901)
    Car - make, model, year, price, color, ...

    each property has name and value

CREATE A OBJECT
1. assign a variable  (a reference that point to where the properties are stored in memory)
2. assign properties name   (cost$ : valid ,  on sale: not valid, "on sale" : valid, no duplicate property name)
3. assign values      (value can be function -> methods of the object)

let object = {
    property1: value1,
    property2: value2
};

object.property = value    - add values
delete object.property     - delete property

*/

let mySecondCar = {
    make: "Mitsubishi",
    model: "Pajero",
    year: 2002,
    color: "white",
    passenger: 6,
    convertible: false,
    mileage: 180000,
    drive: function(){
        if (this.started){
            console.log(`${this.make} ${this.model} goes zoom zoom!`);
        }
    },
    started: false,
    start: function(){
        this.started = true;    // this. is the keyword that refer to the current object
    },
    stop: function(){
        this.started = false;
    },

};

console.log(mySecondCar.year);
mySecondCar.start();
mySecondCar.drive();    // will call the function() in drive property
mySecondCar.stop();

// loop through properties in object
for (prop in mySecondCar){
    console.log(prop +": " + mySecondCar[prop]);
}


// --

function prequal(car){   //---- passing object to a function: a copy of the reference is passed to the function,
    //  inside the function, the reference copy is still pointing to the same object
    if (car.mileage > 200000) {
        return false;
    } else if ( car.year < 2005){
        return false;
    } else {
        return true;
    }
}

let worthALook = prequal(myFirstCar);
if (worthALook){
    console.log("you gotta go check out this " + myFirstCar.make + " " + myFirstCar.model);
    console.log(`you gotta go check out this ${myFirstCar.make} ${myFirstCar.model}`);
} else {
    console.log("you should really pass on the " + myFirstCar.make + " " + myFirstCar.model);
    console.log(`you should really pass on the ${myFirstCar.make} ${myFirstCar.model}`);
}

// --- Another way to do this

function isWorthALook (didQualify, car){
    if (didQualify){
        console.log(`you gotta go check out this ${car.make} ${car.model}`);
    } else {
        console.log(`you should really pass on the ${car.make} ${car.model}`);
    }
}

isWorthALook(prequal(myFirstCar), myFirstCar);

// ---

function makeCar(){
    let makes = ["chevy", "GM", "Fiat", "Mitsubishi"];
    let models = ["Cadillac", "500", "Bel-Air", "Lancer"];
    let years =[1955, 1957, 1954, 2000];
    let colors = ['red', 'blue', 'tan', 'black'];
    let convertible = [true, false];

    let randomCar = {
        make: makes[Math.floor(Math.random() * makes.length)],
        model: models[Math.floor(Math.random() * models.length)],
        year: years[Math.floor(Math.random() * years.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        convertible: convertible[Math.floor(Math.random() * convertible.length)],
        passenger: Math.floor(1 + Math.random() * 5)     // 1 to 5
    }

    return randomCar
}

// function display (car){
//     console.log(car.make, car.model, car.year, car.color, car.convertible);
// }

let display = car => {console.log(car.make, car.model, car.year, car.color, car.convertible);}

display(makeCar());




// -------------------------------- NOt COVER in CLASS


// CREATE CLASS
class car {
    constructor(model, make, year, mileage){
        this.model = model;
        this.make = make;
        this.year = year;
        this.mileage = mileage;
    }
}

let myFirstCar = new car("lancer", "mitsubishi", 2009, 230000);
console.log(myFirstCar.mileage);
