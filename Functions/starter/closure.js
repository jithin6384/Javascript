//closure is unique property of javascript

//generally a function has an execution stack build on global stack when a function returns its value the execution stack pops out of callstack
//but if a function has a child function inside it and when the child function is called it can still access the parent functions and the variables inside it


let f;


function b(){
	let a = 23;
	f = function(){
		console.log(a * 2);
	}
}

b()
f()
console.dir(f)
function g(){
  let b = 24;
  f= function(){
  	console.log(2 * b);
  }
}

g()
f()


//Example 2

const broadPassenger = function(n, wait){
   console.log(`We are now boarding all the ${n} passengers`)
   setTimeout(function(){
   	console.log(`there are three groups with ${n/3} passengers`)
   }, wait * 1000)

   console.log(`We will board after ${wait} second`)
}



broadPassenger(27, 10)















