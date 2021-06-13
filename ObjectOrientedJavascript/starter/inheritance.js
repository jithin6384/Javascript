'use strict;'

const Person = function (firstName, birthYear) {
    // debugger
    //This keyword will be Student function when Person is called from Student
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    console.log(this);
    //this keyword will be Student function 
    Person.call(this, firstName, birthYear);
    this.course = course;
    
}
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
    console.log(`Hi Iam ${this.firstName} and Doing ${this.course}`)
}

const student1 = new Student('john', 1977, 'computer science')