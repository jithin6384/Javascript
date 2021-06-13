'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///try catch example

// try{
//     let y = 1;
//     const x = 2
//     x = 3
// }catch(err){
//   console.log(err.message)
// }


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

const whereAmI = async function(country){
  try{
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  if (res.status != 200) throw new error("country not found")
  
  const data = await res.json()
  renderCountry(data[1])
  }catch(err){
      debugger
      console.log(`error #*** ${err.message}`)
  }
}

whereAmI('somecountry')