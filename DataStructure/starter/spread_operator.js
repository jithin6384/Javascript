'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    //function to return an array of starter and main course
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({starterIndex = 1, mainIndex, time = "17:00", address}){
    console.log(starterIndex, mainIndex)
  },
  orderPizza: function(ing1, ing2, ing3){
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`)
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


//spread operator
const arr = [1,2,3]

const newArr = [...arr,4,5]


console.log(newArr)

const newMenu =  ['dal makhni',...restaurant.mainMenu]
console.log(newMenu)

const menuTable = [...restaurant.starterMenu, ...restaurant.mainMenu]


console.log(menuTable)

//we can also use spread operator to expand the string 

const str = 'jithin';

const letters = [...str]

// console.log(letters)

//real world example of breaking an array and passing it as parameter to function

// const ingredients = [prompt("what do you want as first ingredient"), prompt("second ingredient"), prompt("and third ingredient")]

// console.log(ingredients)

// restaurant.orderPizza(...ingredients)

//spread operator on objects 
//objects can be expanded same as array
//spread operator can create copies of object

const newRestuarant = { foundedBy: 'john',...restaurant, foundingYear: '1998'}

console.log(newRestuarant)

const kakaDaDaba = {...restaurant}

kakaDaDaba.name = "kaka Da Dhaba";

console.log(kakaDaDaba.name)
console.log(restaurant.name)




//  if I have an array [2,3] spread operator will spread this operator 2,3 
//if i have variable [1,2, ...[3,4]] 

 




















