'use strict';


document.querySelector('#score--0').textContent = 0
document.querySelector('#score--1').textContent = 0
let activePlayer = 0 
let score = 0
let scores = [0,0]
const winningScore = 100
const switchActivePlayer = function(active){
	score = 0 ;
	document.querySelector(`#current--${activePlayer}`).textContent = score
	for(let i = 0; i < document.querySelectorAll('.player').length; i++){
		document.querySelectorAll('.player')[i].classList.toggle('player--active')
	}
	
	return active === 0 ? 1 : 0 
}

  
const winner = function(){
	        const winningPlayer = document.querySelector(`.player--${activePlayer}`).classList
	    	      winningPlayer.remove('player--active')
	              winningPlayer.add('player--winner')
}

	   
		document.querySelector('.btn--roll').addEventListener('click', function(){
		   if (winningScore > scores[activePlayer] ){
			let diceRoll = Math.floor(Math.random() * 6) + 1;
			console.log(diceRoll)
			document.querySelector('.dice').src = `dice-${diceRoll}.png`
			if(diceRoll === 1) {
				activePlayer = switchActivePlayer(activePlayer);
			}else {
			score += diceRoll;
		    }
			document.querySelector(`#current--${activePlayer}`).textContent = score
		  }
		})


	
     document.querySelector('.btn--hold').addEventListener('click', function(){
          if (winningScore > scores[activePlayer] ){
	            scores[activePlayer] += score;
			    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
			
			    if(scores[activePlayer] >= winningScore) {
			    	winner()}
			    else{
			       activePlayer =  switchActivePlayer(activePlayer);
                }
             }
	 })


//new game 
document.querySelector('.btn--new').addEventListener('click', function(){
	location.reload()
})


//hoisting 
// xyz('ssss')

//  function xyz(zss){
// 	console.log(zss);
// }


// function xyz(param){
// 	let a = 3 ;
// 	let b = abc('ssdd');
// 	return a + b ;
// }

// const x = xyz('ssss')

// function abc(param){
// 	debugger
// 	console.log(param)
// 	return 3 ;
// }