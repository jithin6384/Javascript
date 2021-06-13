'use strict';


const modal = document.querySelector('.modal')
const close = document.querySelector('.close-modal')
const show = document.querySelectorAll('.show-modal')
const overlay = document.querySelector('.overlay')


const closeModal = ()=>{
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

const showModal = function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden')
}
for(let i=0; i < show.length; i++){
	show[i].addEventListener('click',showModal)
}

close.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

//key press events are global events

document.addEventListener('keydown', function(e){
  if (e.keyCode === 27 && !modal.classList.contains('hidden')) closeModal()
   
})