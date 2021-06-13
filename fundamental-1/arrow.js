// // 'use strict';


// // function somefunction(){
// // 	console.log(this);
// // }

// // somefunction()


// // const someArrow = () => {
// // 	debugger
// // 	console.log(this)
// // }


// // someArrow()


// // const somecallback = () => {

// // 	// return   () =>{
// // 	// 	console.log(this)
// // 	// }
	
// // 	const x = () => {
// // 		debugger
// // 		console.log('hello')
// // 	}
// // 	x();
// // 	return function(){
// // 		console.log(this)
// // 	}
// //  }


// // const x = somecallback()

// // x();


// // let user = { 
// //     name: "GFG", 
// //     gfg1:() => { 
// //     	console.log(this)
// //         console.log("hello " + this.name); // no 'this' binding here 
// //     }, 
// //     gfg2(){  
// //         console.log(this)      
// //         console.log("Welcome to " + this.name); // 'this' binding works here 
// //     }   
// //  }; 

// //  user.gfg1()
//  // user.gfg2()

// // const car = class Car {
// //   constructor(name, year) {
// //     this.name = name;
// //     this.year = year;
// //   }
// //   age(x) {
// //     console.log(this)
// //   }
// //   ageArrow = (x) => {
// //   	console.log(this)
// //   }
// // }



// // let date = new Date();
// // let year = date.getFullYear();

// // let myCar = new Car("Ford", 2014);
// // myCar.age()
// // myCar.ageArrow()
// // console.log("My car is " + myCar.age(year) + " years old.");





// // let person = {
// // 	name: 'john doe',
// // 	birthyear: 1990,
// // 	// age: function(){
// // 	// 	debugger
// // 	// 	2021 - this.birthyear;
// // 	// }
// // 	age: () => {
// // 		debugger
// // 	    console.log(this)
// // 	}


// // }

// // person.age()



// const Car = class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     console.log(this)
//   }
//   ageArrow = (x) => {
//   	console.log(this)
//   }
// }



// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("Ford", 2014);
// myCar.ageArrow()
// myCar.age()
// // console.log("My car is " + myCar.age(year) + " years old.");

// let a = 1
// function first(){
// 	let b = 2;
//      second();
//      function second(){
//      	let c = 3
//      	third();
//      	function third(){
//      		let d = 4 
//      		fourth();
//      		function fourth(){
//                console.log(a + b + c + d)
//      		}
//      	}
//      }
// }

// first();

function first(){

 const second = function(){
		const third =   () => {
			console.log(this)
		}
		third()
	}
 second()

}


first()












