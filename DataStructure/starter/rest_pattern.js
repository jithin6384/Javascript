'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function(time , address, starterIndex, starterMenu =2){
    console.log(obj)
     console.log(`order received ${this.starterMenu[starterIndex]}`)
  },
  orderPizza: function(mainIngredient, ...others){
    
      console.log(mainIngredient, others)
      if(others.length >= 1){
        console.log(`here is your pizza with ingredients ${mainIngredient} and ${others}`)
      }
      else {
        console.log(`pizza only has ${mainIngredient} ingredient`)
      }
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//spread operator is used on the right side of an assignment operator '='

// const arr = [1,2,...[3,4]]
// console.log(arr)

//rest operator on left side of '='
 // destructuring array
  // const [a,b, ...others] = arr

  // console.log(a,b, others)
  // const[...c] = arr
  // console.log(c)
// console.log([...restaurant.starterMenu], [...restaurant.mainMenu])

// const [pizza, ,risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFoods)


// destructing array with rest 
// rest pattern should be the last 

// const {sat,...weekdays} = restaurant.openingHours
// console.log(sat, weekdays)

// let a = 11;
// let b = 22;
// const someobj = {a: 23, b: 45, c: 12}

// const add = function(...numbers){
//   // console.log(numbers)
//   let sum = 0;
//   for(let i = 0; i< numbers.length; i++){
//       sum += numbers[i]
//   }
//   console.log(sum);
// }




// add(1,2)
// add(2,3,4,5)


// restaurant.orderPizza('mushroom', 'spinach', 'paneer', 'cheese')


const {sat, ...weekdays} = restaurant.openingHours

console.log(sat, weekdays)

function add(...numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum)
}


add(2,3);
add(3,4,5,6);
add(5,5,6,7,8);
add(7,8,9,10,14)

const x = [23,4,5,5,6,7,8,9]
add(...x) //using spread to split the array into invidual elements


















