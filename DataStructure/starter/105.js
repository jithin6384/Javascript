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
  orderDelivery: function({time, address, starterIndex, mainIndex}){
      console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex], time, address )
  },
  orderDeliveryArrow: ({time, address, starterIndex, mainIndex}) =>{
      console.log(this)
      console.log(time, address, starterIndex, mainIndex)
  },
  orderFood: function(ing1, ing2, ing3){
     console.log(ing1, ing2, ing3)
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

console.log(...arr);
const newArr = [...arr,4,5]

console.log(newArr)
//we can use spread operator to open up an array and pass it into function
//for example as shown below

// const ingredients = [prompt('Enter first ingredient'), prompt('Enter Second ingredients'), prompt('enter third ingredient')]

// restaurant.orderFood(...ingredients)

//if we do {..obj} spread operator opens up an object into its key value pairs we can further add 
//more keys and corresponding values

const newRestuarant = {foundedIn: 1998,...restaurant, foundedBy: 'John Doe'}

console.log(newRestuarant)

//destructing can also be create shallow copy of object

const restCopy = {...restaurant}
//It will not affect the orginal restaurant object
restCopy.name = "New  Italian"
console.log(restaurant, restCopy)
