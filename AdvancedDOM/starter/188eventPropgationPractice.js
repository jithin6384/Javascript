'use strict';

///////////////////////////////////////
// Modal window


////////////////////
//188/////////////
//////////////////////////////

//Event Propagation in Practice 

//generating random colours

const randomInt = function(max, min){
    return Math.floor(Math.random() * (max -min + 1) + min)
  }
  
  const randomColor = function(){
    return `rgb(${randomInt(255,0)}, ${randomInt(255,0)}, ${randomInt(255,0)})`
  }
  
  
  document.querySelector('.nav__link').addEventListener('click', function(e){
    // console.log(this)
    e.preventDefault();
    console.log('LINK', e.target, e.currentTarget)
    console.log(this === e.currentTarget)
    this.style.backgroundColor = randomColor()
    // debugger
    //Stop propogation
    //to stop events propgation to its parents
    // e.stopPropagation();
  })
  
  document.querySelector('.nav__links').addEventListener('click', function(e){
    console.log('LINK', e.target, e.currentTarget)
    console.log(this === e.currentTarget)
    this.style.backgroundColor = randomColor();
  })
  
  document.querySelector('.nav').addEventListener('click', function(){
    //  debugger
     this.style.backgroundColor = randomColor();
     console.log('LINK', e.target, e.currentTarget);
    // console.log(this === e.currentTarget)
    
  })
  
  