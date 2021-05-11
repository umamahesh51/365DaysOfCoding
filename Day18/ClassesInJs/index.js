const Vehicle = require("./class");
var bike = new Vehicle(2, 1234, 2);
console.log(bike);
var car = new Vehicle(4, 2345, 4);
console.log(car);
bike.paint("Red");
car.paint("Black");
console.log(bike, car);
