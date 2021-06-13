'use strict';

// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// §
// §
// Data car 1: 'BMW' going at 120 km/h
// Data car 2: 'Mercedes' going at 95 km/h

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
  return this.speed =  this.speed + 10 ;
}

Car.prototype.brake = function(){
    return this.speed = this.speed - 5 ;
}

const bmw = new Car('BMW', 120);

const merc = new Car('Mercedes', 140);
// method for acceleration
console.log(`${bmw.make} moves at this speed ${bmw.accelerate()}`);

//after brake on bmw

console.log(`brake were applied on ${bmw.make} and its current speed is ${bmw.brake()}`) ;

//after acceleration on mercedes

console.log(`${merc.make} moves at this speed ${merc.accelerate()}`);

//method for brake for mercedes

// console.log(`brake were applied on ${bmw.make} and its current speed is ${bmw.brake()}`) ;

console.log(`brake were applied on ${merc.make} and its current speed is ${merc.brake()}`) ;



// const car =  function(make){
//     debugger
//     this.make = make;
//     return this.make;
// }

// const nano = car('Nano')

