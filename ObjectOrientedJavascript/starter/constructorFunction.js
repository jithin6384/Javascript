'use strict';

const Person = function(firstName, birthyear){
    this.name = firstName  + "Raghunathan";
    this.age = 2020 - birthyear;
}
//new is a special operator in javascript
//new operator, here calls the person function
//following things happen
// a new empty {} object is created
// this keyword is set to an empty object 
// empty object {} created is automatically linked to the  prototype
//function automatically returns an {}

const jithin =  new Person('jithin', 1988) ;
const sreerag = new Person('sreerag', 1986) ;


console.log(jithin);
console.log(sreerag);
console.log(Person.prototype)
