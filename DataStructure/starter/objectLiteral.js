'use strict';


//enchanhed oject literal


//we can use weekdays as shown below  and then use the index of array to call that day in openingHour object

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
  //using es5
  // openingHours: openingHours
  //using es6
  openingHours
};


//we can also write a function in this way inside object

// order: function(){

// }
//to this 













// order(){

// }