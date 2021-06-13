'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////
///making Ajax request

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

const getCountryAndNeighbour = function(country){
const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    const [neighbour] =  data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function(){
        const neighbourData = JSON.parse(this.responseText)
        renderCountry(neighbourData, 'neighbour')
    })
})
}

// getCountryAndNeighbour('portugal');
//    getCountryAndNeighbour('usa');
//  getCountryAndNeighbour('germany')


//  setTimeout(function(){

//      setTimeout(function(){
//      
//      },1000)
//  },1000)

//example of callback hell

setTimeout(()=>{
    console.log('1 second passed')
    setTimeout(()=>{
        console.log('2 seconds passed')
        setTimeout(()=>{
            console.log('3 seconds passed')
            setTimeout(()=>{
                console.log('4 seconds passed')
            },1000)
        },1000)
    },1000)
},1000)







