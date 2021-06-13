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


//optional chaining example 


console.log(restaurant.openingHours?.mon?.open)




const weekdays =  ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']




// for(const day of weekdays){
//   // const open = restaurant.openingHours[day]?.open || 'closed' ;  // it gives closed on saturday as 0 is treated as false by || operator
//   const open = restaurant.openingHours[day]?.open ??  'closed' ; //using nullish collasing operator
//   console.log(`Restaurant opens on ${day} on ${open}`) 

// }

//optional chaining on methods
//we can check if method exists or not 

const [starterMenu, mainMenu] = restaurant.order?.(2,1)



console.log(restaurant.orderRestuarant?.() || 'method does not exist')





















