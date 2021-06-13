'use strict;'

//static methods are like class methods in ruby

//methods built on constructor rather than instance
//example Array.from


class Person  {
    constructor(firstName, birthYear){
        this.birthYear = birthYear;
        this.firstName = firstName;
    }

    static greeting(){
        return 'Hey there '
    }
}




const greeting = Person.greeting()

console.log(greeting)