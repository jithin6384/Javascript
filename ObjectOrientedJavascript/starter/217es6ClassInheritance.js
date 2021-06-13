'use strict';

class PersonCl {
    constructor(fullName, birthYear){
        // console.log('full Name property' + fullName)
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get age(){
        console.log(2037 - this.birthYear);
    }

    set fullName(name){
        // console.log('fullName setter' + name)
        this._fullName = name;
    }
}



class Student extends PersonCl{
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }


}

//when extends keyword is used it automatically inherits all methods written in parent class
//this can be seen as follows

const sarah = new Student('Sarah parker', 1990, 'cs')
console.log(sarah)