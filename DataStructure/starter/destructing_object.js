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


//1.desructing object use {}
//2.name used is similar to the attribute name of object so it maps into the object attribute and takes the property

const {name, categories} = restaurant; 


// {name: restaurantName} ;
// declare variable first  and assign it a name corresponding to attribute name as shown

const {name: restaurantName, categories: foodCategories} = restaurant

// console.log(restaurantName, foodCategories)


// using default values
//we can set default values as shown

const {menu = [], starterMenu: starters = []} = restaurant
// console.log(menu, starters)

//mutating variables

let a = 111;
let b = 223;
let obj = {a: 23, b: 11, c: 45};

({a,b} = obj);

// console.log(a,b)

//nested objects 
//create nested objects to contain open and close hours for friday

const {openingHours: {fri: {open, close}} } = restaurant

// console.log(open, close)

const orderDelivery = {
  starterIndex: 1,
  mainIndex: 2,
  time: '22:22',
  address: '2 Alpha street '
}

restaurant.orderDelivery(orderDelivery)



























