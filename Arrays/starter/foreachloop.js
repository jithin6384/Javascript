const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//for of loop

for(let movement of movements){
	if(movement > 0){
		console.log(`you deposited ${movement}`)
	}
	else{
		console.log(`you withdrew ${movement}`)
	}
}

console.log('-------Using ForEach------------')

//for each is higher order function uses the function in the loop as callback and 
//calls it during each iteration
//passing index we can tell the index of an array
movements.forEach(function(movement,index){
	// debugger
  if(movement > 0){
		console.log(index + 1 + `time you deposited ${movement}`)
	}
	else{
		console.log(`you withdrew ${movement}`)
	}
});