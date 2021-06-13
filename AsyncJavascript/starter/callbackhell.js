'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data, className){
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

const getCountryAndNeighbour= function(country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function(){
        // console.log(this.responseText)
        const newdata = JSON.parse(this.responseText);
        let data = newdata[1] ? newdata[1] : newdata[0]
         console.log(data)
        renderCountry(data)
    //get neighbours
     if(!data.borders) return;
    //   const [neighbour] = data.borders
    for(const neighbour of data.borders){
      if (!neighbour) return; 
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`)
      request2.send();
      request2.addEventListener('load', function(){
          let data2 = JSON.parse(this.responseText);
          console.log(data2)
         renderCountry(data2, 'neighbour')
      })
    }}
    )};
    
    getCountryAndNeighbour('ind');
    // getCountryAndNeighbour('usa');
    //  getCountryData('portugal');
    //  getCountryData('germany')


