'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////////


// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err=> console.error(err)
// );

const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err=> reject(err)
          );
    })
}


const renderCountry = function(data, className=""){
    // console.log(data)

    fetch(`https://restcountries.eu/rest/v2/name/${data.country}`).then(response => response.json())
    .then(countryDetails => {
         
        const countryData = countryDetails[0] ? countryDetails[1] : countryDetails
        const html = `<article class="country ${className}">
        <img class="country__img" src="${countryData.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.country}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(countryData.population/1000000).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${countryData.languages[0].name} LANG</p>
        <p class="country__row"><span>💰</span> ${countryData.currencies[0].name} CUR</p>
        </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
})
}


// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
//         return response.json();
//     }).then(function(data){
//         renderCountry(data[0])
//     })
// }


const whereAmI = function(){
    getPosition().then(function(position){
        const {latitude: lat, longitude: lng} = position.coords
       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })
    .then(function(response) {
        if(response.status != 200) throw new Error(`Something went wrong ${response.status}`)
      return response.json();
    })
    .then(function(data){
        // debugger
        renderCountry(data)
        // getCountryData(data.country)
        // console.log(`You are in ${data.city}, ${data.country}`)
    })
    .catch(function(err) {
        console.log(err.message)
    })

    
}




btn.addEventListener('click', whereAmI)