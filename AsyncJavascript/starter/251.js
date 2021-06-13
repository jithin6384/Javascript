'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////

const renderError = function(err){
  countriesContainer.insertAdjacentText('beforeend',err)
  countriesContainer.style.opacity = 1
}

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

const getJson = function(url, errorMsg = 'Something went wrong'){

   return  fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`)
        return response.json()
    })
}

const getCountryData = function(country){
    getJson(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not Found')

    .then(data => {
        renderCountry(data[0])
        const [neighbour] = data[0].borders
        if(!neighbour) throw new Error(`No neighbour found`)
       return getJson(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not Found')})
    .then(data => {
           renderCountry(data, 'neighbour')
        })
    .catch(err => {
      renderError(` Something went wrong ...${err.message} 💥💥💥`)
      console.error(`${err} 💥💥💥`)})

    
       
}

btn.addEventListener('click', function(){
    getCountryData('portugal');
 })

 getCountryData('australia')