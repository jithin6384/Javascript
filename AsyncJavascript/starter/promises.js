'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');

//fetch will return a promise

// console.log(request);

//promise is a container for asynchronous value

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

const getCountryData = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
        // console.log(response)
        //json is built in method on response which will return ayncronous promise which can then be chained
        // by other callback function
        return response.json();
    }).then(function(data){
        
        const [neighbour] = data[0].borders
        renderCountry(data[0])
    
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)

    }).then(response => response.json()).then(function(data){
        renderCountry(data)
    })
}

const renderCountry = function(data, className=""){
    console.log(data)
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(data.population/1000000).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name} LANG</p>
      <p class="country__row"><span>💰</span> ${data.currencies[0].name} CUR</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
}

getCountryData('portugal')
