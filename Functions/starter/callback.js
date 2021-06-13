'use strict';

const oneWord = function(str){
	return str.replace(/ /g, '').toLowerCase();
};


const upperFirstWord = function(str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(),...others].join(' ')
}



//higherOrderFunction

const transformer = function(str, fn){

	//recevies function fn as callback
    console.log(`orginal string ${str}`)
    console.log(`transformed string ${fn(str)}`)

}

transformer('Iam trying to learn Javascript', upperFirstWord)

//testing one more callback function

transformer('Javascript is very Interesting Langauge', oneWord)

const high5 = function(){
	alert('High Five')
}

// document.body.addEventListener('click', high5)



const arr = function(...num){

	console.log(num)
     let newItem =" ";
	for(const [index,item] of num.entries()){
		newItem = newItem +  item + " ";
	}
	return newItem;
}

const a1 = ['mon', 'tuesday', 'wed', 'thursday', 'fri', 'sat']

// arr(...a1)

//creating a higher order function that will use the above function as callback


const anyDay = function(fn, ar){
	//receives fn as callback
	console.log(`calling the function ${fn(...ar)}`)
}


anyDay(arr, a1)
