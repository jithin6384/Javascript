'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//flat method 

const arr = [1,2,3 , [3,4], [5,6,7]]

//flatens array one level deep

console.log(arr.flat())

const arrdeep = [[1,[2,3]] , [3,4], [5,6,7]]

//falttens to two level deep
console.log(arrdeep.flat(2))

//flat method to calculate total movement in bank through different accounts

const totalDeposit = accounts.map(acc => acc.movements).flat().reduce(function(acc, cur){
   return acc + cur
},0)

console.log(totalDeposit)


//flatmap method combines both flat and map 
//falttens to only one level deep
const totalDepositnew = accounts.flatMap(acc => acc.movements).reduce((acc,curr) => acc + curr,0 )
console.log(totalDepositnew)