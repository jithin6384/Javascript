'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data, className=""){
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


const getCountryData = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
        
        if (!response.ok){
            throw new Error(`Country not found ${response.status}`)
        }
      return  response.json()})
    .then(function(data){
        const [neighbour] = data[0].borders
        renderCountry(data[0])
    if (!neighbour) return;
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)

    }).then(response => response.json()).then(function(data){
        renderCountry(data)
    }).catch(err => renderError(`Somethin went wrong ${err.message} Try Again`))
}

const renderError = function(msg){
    countriesContainer.insertAdjacentHTML('beforeend', msg)
}

btn.addEventListener('click', function(){
    getCountryData('portassdsaaugal');
})