'use strict';
// const a = 3 ;
// first();

//  function first(){
//  	const b = 2 ;
//  	// second()
//  	function second(){
//  	let c = 4 ;
//  	console.log(c)
//  	third()
//  	function third(){
//  	let d = 5 ;
//  	console.log(a  + b + c + 
//  		 d);
//  }
//  }
//  }


// second();

// const a = 10 ;

// first()


// function first(){
// 	console.log(a)
// }

// console.log(a)

// let a = 10;

//TDZ temperal death zone





// var first = function(){
// 	console.log(a)
// }

// first()

// var name = "jane"
// let person = {
// 	name: "john",
// 	year: 1990,
// 	calcAge: function(){
	
// 		// debugger
// 		 // 2020 - this.year
// 	 let isMillenial = () => {
// 	 	console.log(this)
// 	 }
// 	 isMillenial()
// 	},
// 	getname: () =>{
// 		console.log(this.name)
// 		// debugger
// 	}
// }


// var calcAge = function(year){
// 	console.log(2020 - year)
// 	console.log(this)
// }

// calcAge(1990)

// var calcAgearrow = (year) =>{
// 	console.log(2020 -year)
// 	console.log(this)
// }
// calcAgearrow(1989)


// person.calcAge()


// var test = function(a,b,c){
// 	console.log(arguments)

// }

// var testarrow = (a,b,c) => {
// 	debugger
// 	console.log(arguments)
// }


// var person = {
// 	firstname: "Brock",
// 	year: 1977,
// 	calcAge: function(){
//      let age = 2020 - this.year;

//      const isMillenial = () => {
//      	console.log(this)
//      }
//      isMillenial();
// 	}
// }

// const a = 3 ;
// first();

//  function first(){
//  	const b = 2 ;
//  	second()
//  	function second(){
// 		let c = 4 ;
//  	console.log(c)
//  }
// //  let c = 4 ;
//  }


// const firstName = 'John'

// var lastName = 'Sena'


//testing functions scope inside and outside of the function


// function calcAge(){
// 	const age = 2021 - 1990;

// 	 function printAge(){
// 		// console.log(age)
// 		if(true){
// 		function add(a,b){
// 			console.log(a + b)
// 		}
		
// 		//however using strict mode the code will only work if called inside the scope of if block
// 	     add(2,3)
// 	}
// 	//functions are not block scoped if not in strict mode so the below code will work fine 
// 		// add(2,3)
// 	}

// 	printAge()
// }


// calcAge()
//calling a function outside its scope

// printAge()

// 'use strict';



// if(!numberOfProducts) deleteAllProducts();

// var numberOfProducts = 10;


// function deleteAllProducts(){
// 	console.log('delete all products')
// }

// console.log(window)

let jonas = {
	name: 'jonas',
	year: 1990,
	calcAge: function(){
		console.log(2037 - this.year)

	},

	greet: () => {
		// console.log(this)
		function checkThis(){
			console.log(this)
		}

		checkThis()

	}
}
jonas.greet()
jonas.calcAge()








 