'use strict';

const createBooking = function(flightNum, numberOfPassenger=2 , price=199){
  //setting up the default parameter the old ES5 way
   //no need to declare this again
   // numberOfPassenger = numberOfPassenger || 10
   // price = price || 199
	const booking = {
		flightNum,
		numberOfPassenger,
		price
	}
	console.log(booking)
}


createBooking('113B')