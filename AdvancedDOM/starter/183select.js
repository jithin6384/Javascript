'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function(btn){
  btn.addEventListener('click', openModal);
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


//selecting Element

console.log(document.documentElement)  //selects entire HTML

console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')

console.log(allSections)

const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

//Creating and inserting element

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'We use cookie for improved functionality and Analytics <button class="btn btn-close-cookie">Got it </button>';

//inserting element 
//apend makes it last child of the element 
//prepend makes it first child

header.append(message);


//deleting

document.querySelector('.btn-close-cookie').addEventListener('click', function(){
    header.remove(message)
})


//kings territory problem javascript

const king = 'Chandragupta';

if(true){
  const king = 'Bindusar';
  if(true){
     king = 'Ashoka';
    console.log(king)
  }
}



