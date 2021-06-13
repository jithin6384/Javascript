'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// const p = document.querySelector('.p');

// // p.textContent = "My name is Jithin"

// // setTimeout(function(){
// //  p.textContent ="My name is jithin"
// // },5000)

// setTimeout(changeText, 5000)
// p.style.color ="red";


// function changeText(){
//     p.textContent ="My name is jithin"
// }

//first ajax call

////////////////////////////////////
const getCountryData= function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
request.addEventListener('load', function(){
    // console.log(this.responseText)
    const newdata = JSON.parse(this.responseText);
    let data = newdata[1] ? newdata[1] : newdata[0]
    console.log(data)
    renderCountry(data)
    const html = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(data.population/1000000).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name} LANG</p>
      <p class="country__row"><span>💰</span> ${data.currencies[0].name} CUR</p>
    </div>
  </article>`;
//   debugger
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
}
)};

 getCountryData('ind');
 getCountryData('usa');
 getCountryData('portugal');
 getCountryData('germany')
























