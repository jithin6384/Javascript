'use strict';

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function(ages){
   return ages.map(function(age){
        return age <= 2 ? age * 2 : 16 + age * 4 ;
    }).filter(function(age,i, arr){
        return age >= 18;
    })
     .reduce(function(acc, cur,i, arr){
        return (acc + cur)/arr.length
        if(i == (arr.length - 1)){
            return (acc + cur)/arr.length
        }
        else{
            return acc + cur;
        }
     },0)
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))