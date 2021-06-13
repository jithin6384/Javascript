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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for of loop for looping through the current element

// for (const item of menu) console.log(item);


// displaying the current item of element along with index
// for (const el of menu.entries()) console.log(el);

 //displaying the above content through desreucting array
 
 // for(const [index, element] of menu.entries()) {
 //  console.log(`menus in the index are ${index + 1} and ${element}`)
 // } 



//for of loop

// for(const item of menu){
//   console.log(item)
// }
//item demonstrates the current element of array
//menu.entries method is used for listing the current index of arrays


// for(const el of menu.entries()){
//   console.log(el)
// }

//what is menu.entries 

// console.log(menu.entries()) // array iterator

// console.log([...menu.entries()]) //gives an array of elements [0,0th element]

// for(const item of menu.entries()){
//   console.log(`${item[0]} : ${item[1]}`)
// }

//doing the same using destructing of an array
for(const [index, currentItem] of menu.entries()){
  //current index and element
  console.log(index + " : " + currentItem)
}

















