

const goAir = {
	airline: 'goAir',
	iataCode: 'Go',
	bookings: [],
	book: function(flightNum, name){
		console.log(`${name} booked flight on ${this.airline} with ${this.iataCode} ${flightNum}`)

		this.bookings.push(`${this.airline} : ${this.iataCode} ${flightNum}`)
	}
}

goAir.book(11, 'Air')
goAir.book(12, 'Air')


//In order to use this method on the objects we can use call method of javascript


const spiceGet = {
	airline: 'spiceGet',
	iataCode: 'SG',
	bookings: []

}
//since functions are first class citizens (or just values) we can store their values in the variables

const book = goAir.book

//-------------------Call Method ------------------------------//

// first argument is passed as object which points to this in that function

book.call(spiceGet,11,'Spice' )

//-------------Apply Method----------------------//

//In Apply method we push the arguments in the function value by converting them into an array


const bookArr = [12, 'Spice']

book.apply(spiceGet, bookArr)

//we can do the same as above using Spread operator  with call

book.call(spiceGet,...bookArr)


















