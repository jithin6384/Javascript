'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').innerHTML);
let highScore = 0;
const displaymessage = (message) => {
	document.querySelector('.message').innerHTML = message;
}
document.querySelector('.number').innerHTML = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
	// console.log("It works ");
	const guess = Number(document.querySelector('.guess').value)
	// const documentMessage = document.querySelector('.message')
	if(score > 1 ){
	    if (guess === secretNumber) {
	    	displaymessage("correct answer You have won") ;
			// documentMessage.innerHTML = "correct answer You have won"
			document.querySelector('body').style.backgroundColor = '#60b347' ;
			document.querySelector('.number').style.width = '30rem' ;
			if(score > highScore){
			  highScore = score;
			  document.querySelector('.highscore').innerHTML = highScore ;
             }
		}
		else if(!guess){
			displaymessage("Wrong guess")
			// documentMessage.innerHTML = "Wrong guess"
			score-- ;
		}
		else {
			displaymessage(guess > secretNumber ? "guess is too high" : "guess is too low")
			score-- ;
			
		}
	
	}	
	else {
	    displaymessage("you lost the game")
		documentMessage.innerHTML = "you lost the game "
		score = 0 ;
	}
	document.querySelector('.score').innerHTML = score;
	console.log(guess)
})


document.querySelector('.again').addEventListener('click', function(){
   score = 20
   secretNumber = Math.floor(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor = '#222' ;
   document.querySelector('.number').style.width = '15rem' ;
   document.querySelector('.guess').value = "";
   document.querySelector('.number').innerHTML = secretNumber;
   document.querySelector('.score').innerHTML = score ;
   document.querySelector('.message').innerHTML = "Start guessing...";
})

