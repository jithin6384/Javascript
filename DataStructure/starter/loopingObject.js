'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


//we can use objects like openingHours created outside of the main object like restaurant and put it inside restuarant 

const openingHours = {
  [weekdays[3]]: {
    open: 11,
    close: 24
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24
  }
};

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
  openingHours
};


//looping over object Objec.keys(object) will give an array of object keys


// console.log(Object.keys(openingHours))
let openStr = `we are open at ${Object.keys(openingHours).length} days : ` 
for(const day of Object.keys(openingHours)){
  openStr += `${day} ` ;
}
// console.log(openStr)




//Object.values(object) will give values for Object 

// console.log(Object.values(openingHours))
const values  = Object.values(openingHours)

const entries = Object.entries(openingHours)

// for(const [day,{open, close}] of values.entries()){
//   console.log(day, open, close)
// }

for(const [day, {open, close}] of entries){
  console.log(day, open, close)
}