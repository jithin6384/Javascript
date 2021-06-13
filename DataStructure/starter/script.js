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
  orderPizza: function(ing1, ing2, ing3){
    console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)

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





// spread operator

// const ingredients = [prompt("what do you like to have as your first ingredient"), prompt('what about second'), prompt('what about third')]
// console.log(ingredients)

// restaurant.orderPizza(...ingredients)
//

 const a = [1,2,3]
 
let ...d = a
 console.log(d)

// 3. spread operator can also be used to create copy of objects

// const newRestaurant = {...restaurant}
// this creates a copy and when we change some properties in anyone other is ineffected
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu)

//using objects assign

// const menuNew = Object.assign(restaurant.starterMenu, restaurant.mainMenu)
// console.log(menuNew)

// const obj = {time: '15:00', address: "some street nevada", starterIndex: 1, mainIndex: 2}
// restaurant.orderDelivery(obj)


// destructuring arrays
// const [category1, ,category3] = restaurant.categories
// const [starterCourse, mainMenu] = restaurant.order(2,1)

// swapping arrays through destructing 
// let [main ,secondary ] = [1,2]
// console.log([main, secondary])

// console.log(starterCourse, mainMenu)


//destructuring objects

// const{name, categories, mainMenu} = restaurant

// console.log(name, categories, mainMenu)

// const city ={
//   cityName: 'interlaken',
//   country: 'Switzerland',
//   continent: 'Europe'
// }

// const{cityName, country, continent} = city

// console.log(cityName, country, continent)

// const{name: restaurantName, 
//       categories: tags, 
//       openingHours: hours} = restaurant

// console.log(restaurantName, tags, hours)

// const{menu =[], categories: categoryTags = []} = restaurant


// console.log(menu, categories)





//mutating variables

// let a = 111;
// let b = 222;
// let someobj = {a: 23, b: 45, c: 34}

//  ({a,b} = someobj)


// const{fri} = restaurant.openingHours
// const{fri: {open, close}} = restaurant.openingHours
// const {sat: {open, close}} = restaurant.openingHours
// console.log(open, close)