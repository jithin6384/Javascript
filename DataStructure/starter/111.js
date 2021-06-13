'use strict';
//enhanching object literals
const openingHours = {
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
      }
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex){
    //function to return an array of starter and main course
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  //methods can also be written like this
  orderDelivery({time, address, starterIndex, mainIndex}){
      console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex], time, address )
  },
  orderDeliveryArrow: ({time, address, starterIndex, mainIndex}) =>{
      console.log(this)
      console.log(time, address, starterIndex, mainIndex)
  },
  orderFood: function(ing1, ing2, ing3){
     console.log(ing1, ing2, ing3)
  },
  openingHours
};

console.log(restaurant.openingHours)

console.log(restaurant.order(2,1))