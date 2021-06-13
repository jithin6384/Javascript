'use strict';


class PersonEl {

    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(`age is ${2021 - this.birthYear}`)
    }
}

class StudentEl extends PersonEl {
    constructor(firstName, birthYear, course){
        super(firstName, birthYear)
        this.course = course;
    }
}

const student1 = new StudentEl('mike', 1990, 'Computer Science')