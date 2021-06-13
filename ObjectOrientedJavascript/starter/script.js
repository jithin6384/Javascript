'use strict';


//205   Contructor function and new operator

//constructor function always starts with capital function

// const Person = function(firstName, birthYear){
//     //    console.log(this);/
//     //setting properties of constructor function
//     //instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     //methods can also be added in similar fashion but shouldnt be added since we have
//     //prototypal inheritance in Js

// }

// //testing using arrow
// // const Person = (firstName, birthYear) => {
// //     console.log('this of arrow =>'+ this);
// // }


// const person1 = new Person('jithin', 1989);
// console.log(person1)
// // const p1 = new Person('john doe', 1991);

// // console.log(p1);


// //206 Prototypes


// Person.prototype.calcAge = function(birthYear){
//     console.log(2037 - birthYear)
// }

// console.log(person1.__proto__);
// console.log(person1.__proto__ == Person.prototype);

// //208 Prototypal Inheritance on Objects

// console.log(person1.__proto__.__proto__)

// //Object.prototype ---> Top of prototype chain ---> null

// console.log(person1.__proto__.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

// const arr = [1,2,3,4,5,6,6,7,7,8,9]
// console.dir(arr.__proto__)

// //adding unique property to Array 

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// }

// console.log(arr.unique())

// const h1 = document.querySelector('h1');


//210 ES6 classes
//ES6 Classes are syntatic sugar over the orginal javascripts functional approach

//syntax is as follows
//class declaration
//just like a normal constructor function when a Person1 class is called with new 
// an empty object is created and and contructor is called and an empty object {}
//is returned

class Person1 {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //we can also create prototypes in a similar way
    calcAge(){
        console.log(2037 - this.birthYear)
    }

    get age(){
        console.log(`age is ${2037 - this.birthYear}`)
    }
    get fullName(){
        return this._fullName;
    }
    set fullName(name){
         this._fullName = name; 
    }
}

//to check the returned object when Person1 class is called
// console.log('to check property of returned objected ')
// // console.log(new Person1())
// console.log(new Person1('jithin', 1989))
// const person3 = new Person1('jithin', 1989);
// person3.calcAge();
// // (new Person1('jithin', 1989)).calcAge();
// const person2  = new Person1('john', 1998);
// // person2.calcAge()
// person2.age;

const person1 = new Person1('claus smith', 1922);
console.log(person1)
console.log(person1.fullName)
//classes are not hoisted
//just like functions, classes are also first classes citizens
//which means they can used as values and in passing inside a class
//classes are always executed in strict mode

//211 setters and getters

//example of setters and getters using object literal

const account = {
    owner: 'jithin',
    movement: [3000, 4900, 5000, 2000, 300],
    
    //getters
    get latest(){
        return this.movement.slice(-1).pop()
    },
    //setters
    set latest(mov){
      this.movement.push(mov)
    }
}

//getter method can be used as property
console.log(account.latest);

//setting method
account.latest = 50;

console.log(account.movement)

///212 Static method

class PersonCl {
    //instance properties
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    get age(){
       return 2037 - this.birthYear
    }
   //static methods are not in herited in the objects
    static hey(){
        console.log('Hello')
    }
}


PersonCl.hey()

const personCl = new PersonCl('jonas', 1990)
console.log(personCl.age)

//Person contructor function

Person1.hey = function(){
    console.log('person 1 hey there')
}
Person1.hey();

///213 Object.create



///219 //another class example

class Account {
  constructor(owner, currency, pin, movement){
      this.owner = owner;
      this.currency = currency;
      this.pin = pin;
      this.movement = [];
      this.locale = navigator.language;
  }

  //adding methods to withdraw or deposit

  deposit(val){
      this.movement.push(val);
  }
  withdrawal(val){
      this.deposit(-val);
  }
  
  approveloan(val){
    return true;
  }
  requestLoan(val){
      if(this.approveloan(val)){
          this.deposit(val);
          console.log('loan approved');
      }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);



acc1.deposit(300);
acc1.withdrawal(150);
acc1.requestLoan(500)
console.log(acc1);