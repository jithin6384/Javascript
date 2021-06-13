'use strict';

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// §
// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//   return this.speed =  this.speed + 10 ;
// }

// Car.prototype.brake = function(){
//     return this.speed = this.speed - 5 ;
// }

class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        return this;
    }
    brake(){
        this.speed -= 5;
        return this;
    }
}

class EV extends Car {
    //private property
    #charge;
    constructor(make, speed, charge){
          super(make, speed);
          this.#charge = charge;
    }
    
    chargeBattery(charegTo){
        this.#charge = charegTo;
        return this;
    }
    accelerate(){
        this.speed += 20;
        this.#charge -= 1;
        console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`)
        return this;
    }

}

const rivian = new EV('Rivian', 120, 23)
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();
console.log(rivian)

// const tesla = new EV('tesla',120, 23);

// tesla.accelerate();
// tesla.accelerate();
// tesla.chargeBattery(90)
// tesla.accelerate()
// console.log(tesla.brake())