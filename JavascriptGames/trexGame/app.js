'use strict';

const dino = document.querySelector('.dino');
const grid = document.querySelector('.grid');
dino.style.bottom = '0px';
let isPlaying = true;
let score = 0;
const startGame = function(){
const changeHeight = function(e){
    if(e.code  === "Space"){
       dino.style.bottom = '150px';
       setTimeout(function(){dino.style.bottom = '0px';},340)
    }
};

document.addEventListener('keypress',changeHeight);



//Generating Obstacles

const generateObstacles = function(){
    let position = 1000;
    const obstacle = document.createElement('div')
    obstacle.classList.add('obstacle');
    debugger
    if(grid.childElementCount <= 2 ){
        grid.appendChild(obstacle);
    }
    
    document.querySelector('.obstacle').style.left = position + 'px'
    // obstacle.style.left = position + 'px';
//move obtacles towards dino 
//Things to do 
//1. obstacle should move at constant pace towards dino 
//2. when obstacles and dino collide game should end otherwise it should continue
//3. Score = seconds * 10 ;
let moveLeft = setInterval(function(){
   position -= 100   
   obstacle.style.left = position + 'px';
   
   
     console.log('obstacle' + obstacle.style.left)
//    displayScore.textContent = `${score}`
  if(obstacle.style.left == dino.style.bottom ){
    isPlaying = false;
    //  window.alert('Game Over')
  }

   if(position <= -100){
    // clearInterval(moveLeft);
    // obstacle.style.display = 'none';
    position = 1000;


}
},250)



}
//generating obstacles at Random time

setInterval(generateObstacles,250)


//generating scores
const displayScore = document.createElement('div') ;
displayScore.classList.add('displayScore');
grid.appendChild(displayScore);
setInterval(function(){
 if(isPlaying){
 score = score + 1
 displayScore.textContent = 'currentScore : ' +  score;
 }else{
    //  clearInterval(moveLeft)
 }
}, 100)

}
//  document.querySelector('.displayScore').textContent = `${score}` 

startGame();





















//another approach

// 'use strict';

// let isJumping = false; // restricts jumping while still in air
// const dino = document.querySelector('.dino');
// const changeHeight = function(e){
//     if(e.code  === "Space"){
//        if(!isJumping){
//            isJumping = true;
//            jump();
//        }
//        const jump = function(){
//         dino.style.bottom = '150px';
//         setTimeout(function(){document.querySelector('.dino').style.bottom = '0px';},200)
//         if(dino.style.bottom == '0px'){
//             isJumping = false;
//         }
//        }
       
//     }
// };

// document.addEventListener('keypress',changeHeight);

