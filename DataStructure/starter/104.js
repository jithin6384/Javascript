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
//provide variable name exactly same as property name 

const {name, categories, openingHours} = restaurant;

console.log(name, categories, openingHours)

let a = 111;
let b = 999;

const obj = {a: 9, b: 10, c: 11};

({a,b} = obj);
console.log(a, b)


 const {fri} = openingHours;

const {fri: {open, close},} = openingHours;

//using function to destructure object

restaurant.orderDelivery({
    time: '20:30',
    address: 'Alm Street Bac ',
    starterIndex: 1,
    mainIndex: 2
})

restaurant.orderDeliveryArrow({
    time: '20:30',
    address: 'Alm Street Bac ',
    starterIndex: 1,
    mainIndex: 2
})

