// class Arr extends Array {
//     super(){
    
//     }
// }

// let arr = new Arr;
// arr = [1,2,3]
// console.log(arr)
// console.log(arr.__proto__)


class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge(currentYear){
        return currentYear  - this.birthYear; 
    }
}

const princeAdam = new Person('Heman', 1990)

console.log(`${princeAdam.firstName}s age is ${princeAdam.calcAge(2021)}`);