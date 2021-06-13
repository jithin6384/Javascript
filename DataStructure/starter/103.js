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

//destructing of an array
//destructing is unpacking an array destructing is to break down a bigger data structure into smaller data structure


const arr = [1,2,3]

const [x,y] = arr
console.log(x,y)


const [starter, mainCourse] = restaurant.order(3,1)
console.log(starter, mainCourse)

//interchaning through destructing

let main = 3;
let secondary = 2;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary)

//nested destructing

const nested = [1,2,[3,4]]


let [i, ,[j,k]] = nested;
console.log(i,j,k)





