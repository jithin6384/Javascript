'use strict';

//each and every function has a property called prototype
//every instance of function will get the methods defined on prototype property
//Person.prototype
const Person = function(firstName, birthyear){
    this.name = firstName  + "Raghunathan";
    this.birthyear = birthyear
}

const jithin = new Person('jithin', 1990);

Person.prototype.calcAge = function(currentYear){
  return  currentYear - this.birthyear;
}


console.log(jithin.calcAge(2037));


//it works because prototype of object is the prototype of constructor function
console.log(jithin.__proto__)
console.log(jithin.__proto__ === Person.prototype);


let arr = [1,2,3]
console.log(arr.__proto__)
console.log(arr.__proto__.constructor)


const h1 = document.querySelector('h1')
console.dir(h1)
console.log(h1.__proto__.constructor)