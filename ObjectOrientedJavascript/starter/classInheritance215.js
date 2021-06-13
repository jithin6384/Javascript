'use strict';

//inheritance between classes 

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    //inheritance from Person contructor function
   // Person(firstName, birthYear) will not work because here this is not set to Person contructor and is undefined as
   //we are calling the function directly so a better way of doing that
   //is by using call
    Person.call(this, firstName, birthYear)
    this.course = course;
}

//inheriting prototype methods from Person constructor to Student constructor

Student.prototype = Object.create(Person.prototype)
  
//we cant do this like Student.prototype = Person.prototype
// Student.prototype = Person.prototype;


console.log(Student.prototype)
Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I am studing ${this.course}`)
}

const mike = new Student('mike', 1989, 'Software & Communication')

mike.introduce();

console.log(mike instanceof Person)
Student.prototype.constructor = Student
console.log(Student.prototype.constructor)