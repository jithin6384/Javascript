'use strict';

//setters and getters

class PersonCl {
    constructor(fullName, birthYear){
        console.log('full Name property' + fullName)
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get age(){
        console.log(2037 - this.birthYear);
    }

    set fullName(name){
        console.log('fullName setter' + name)
        this._fullName = name;
    }
}

const person1 = new PersonCl('jonas schmitmann', 1990);


//get method

//person1.age 

//set method 

//person1.fullName = 'jonas schmitmann'