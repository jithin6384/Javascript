'use strict';

const greet = function(greeting) {

	const interest = "coding"
	return function(name){
		console.log(`${greeting} ${name} interest ${interest}`)
	}
}

const greetHey = greet('hey')

greetHey('jithin')


//using arrow function


const greetArrow = (greeting) => (name) => {

	return console.log(greeting + " " + name);}
	// return function(name){
	// 	console.log(greeting + " "  + name)
	// }

greetArrow('Hey')('Jithin')