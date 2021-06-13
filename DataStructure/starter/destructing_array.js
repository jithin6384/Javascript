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

//destructing array ....
//destructing is unpacking an array destructing is to break down a bigger data structure into smaller data structure


// const arr = [1,2,3]
// const [x,y,z] = arr
// console.log(x,y,z)

let [main, secondary] = restaurant.categories
console.log(main, secondary); 

// let ternary = secondary
// secondary = main
// main = ternary

// console.log(main, secondary)


// switch between main and secondary
// [main, secondary] = [secondary, main]
[main, secondary] = [secondary, main] ;
console.log(main, secondary);


//calling function to order food from resturant and storing it by destructing the array

let [starter, mainCourse] = restaurant.order(2,1)




console.log(starter, mainCourse)

//destructing nested array

const nestArr = [1,2,[3,4]]

let[i, ,[x,y]] = nestArr
console.log(i,x,y)


//setting up default value
let [p = 1, q =1, r =1] = [8,9]
console.log(p,q,r)






