'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////

// promise is a container for asynchronous value

///promises will have two values fullfilled or rejected

//promises are time dependent

//promises lifecycle

//1.promise is pending

//2. promises is settled

//Setlled promises have two values 

//1. Fulfilled or 2. Rejected

//example of promises

//here in this example we have a fetch method which returns a promise 
//'then' is method available on all promises
//we pass a callback function on 'then' 
//callback function contains one argument which is the resulting value of fullfilled promises
//we can then log the response to check it on console

//fetch method returns a promise


const renderCountry = function(data, className=""){
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(data.population/1000000).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

// const getCountryData = function(country){
//        fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
//            return response.json()
//        }).then(function(data) {
//            renderCountry(data[0])
    

//        })
// }

const getCountryData = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
       
}

 getCountryData('portugal')

// renderCountry(data)