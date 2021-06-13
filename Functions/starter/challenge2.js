// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
document.querySelector('body').addEventListener('click', function(){
	header.style.color = 'blue';
})
})();

//annoymous function defined is called by IIFE as shown
//we are defining an higher order function event listener which will then be triggered by click on body
// just like a f inside a function g as shown
// function g(){
// 	let h = 1;
// 	function f(){
// 		console.log(h * 2);
// 	}
// }
//g ()
//f()
