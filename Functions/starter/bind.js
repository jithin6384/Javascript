'use strict;'

const flyer = {
	name: 'flyer',
	fly: function(speed){
		console.log(`${this.name} flies at ${speed} km/h`)
	}
}


const runner = {
	name: 'runner',
	run: function(speed){
		console.log(`${this.name} runs at ${speed} km/h`)
	}
}
//using call method first argument is object and second is the parameter specfic to that function
 // runner.run.call(flyer, 20)

 //using bind method

 const run = runner.run.bind(flyer)

 // run(25)

 const goAir = {
	airline: 'goAir',
	iataCode: 'Go',
	bookings: [],
	book: function(flightNum, name){
		console.log(`${name} booked flight on ${this.airline} with ${this.iataCode}${flightNum}`)

		this.bookings.push(`${this.airline} : ${this.iataCode} ${flightNum}`)
	}
}


const spiceGet = {
	airline: 'spiceGet',
	iataCode: 'SG',
	bookings: []
}

const book = goAir.book.bind(spiceGet)

// book(13, 'Jithin')

// const book1 = goAir.book.bind(spiceGet, 14)

// book1('Sreerag')

// const book2 = goAir.book.bind(spiceGet, 15, 'John Doe')

// book2()


spiceGet.planes = 300;

spiceGet.buyPlanes = function(){
	console.log(this)
     this.planes++ ;
	console.log(this.planes) ;
}

// const buyplanes = spiceGet.buyPlanes

// document.querySelector('.buy').addEventListener('click', buyplanes)

//Using bind method we can point out this function to the buyplanes 

// adding bind to the function will make it as callback function
document.querySelector('.buy').addEventListener('click', spiceGet.buyPlanes.bind(spiceGet))


// const tax = (rate, value) => value + value * rate;

// console.log(tax(.6, 100)) 

// const vatTax = tax.bind(this, 0.23)

// console.log(vatTax(200))




const tax = function(){

	return function(rate, value){
		return value + value*rate
	}
}


const calcTax = tax()(.6, 100)
const vatTax = tax().bind(this, .23)
console.log(vatTax(100))

























