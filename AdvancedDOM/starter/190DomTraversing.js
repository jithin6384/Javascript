'use strict'

///190. DOM Traversing 
//moving from one place to another in DOM

const h1 = document.querySelector('h1');
//Going Downwards
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.children);
console.log(h1.childNodes)

//Going Upwards
console.log(h1.parentElement)
console.log(h1.parentNode)

//Selecting the closet element from the list

console.log(h1.closest('.header'))
h1.closest('.header').style.backgroundColor = 'var(--color-secondary)';
h1.closest('h1').style.backgroundColor = 'var(--color-primary)';

//Going Sideways

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
