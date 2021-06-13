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


//rest operator is used to pack an element into array

const arr = [1,2,3,4,5,6,7,8,9]

const [a,b,...others] = arr
console.log(a,b,others)

//..others will pack all the remaining element into an array

//same can be done with objects as well
//objects

const {sat, ...weekdays} = restaurant.openingHours
console.log(sat, weekdays)

//functions

function add(...number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += number[i]
    }
    console.log(sum)
}


add(2,3);
add(2,3,4,5,6);
add(1,2,3,4,5,6,7)
//arr = [1,...,9]
add(...arr)


//spread operator is used for values  seprated by commas whereas rest operator is used for variables seprated by commas