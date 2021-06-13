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

//short circuting in js 
//whenever a true value is encountered in || opertor
console.log(true || false);

console.log('' || 3 );

console.log(null || false || undefined || ''|| 'hello' || true)


restaurant.orderPizza && restaurant.orderPizza("paneer", 'cheese', 'spinach', 'mushroom')


// nullish collasing operator similar to OR || operator but only difference is it considers null or undefined as false