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

const whereAmI = async function(country){
  try{
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  if (res.status != 200) throw new error("country not found")
  
  const data = await res.json()
  renderCountry(data[1])
 return `You are in ${data[1].name}`
  }catch(err){
      console.log(`error #*** ${err.message}`)
  }
}

// const country = whereAmI('Ind')
// country.then(country => console.log(country))


// function (){
//     whereAmI('Ind').then(country => console.log(country))
// })();



( async function(){
    try{
          const country = await whereAmI('Ind')
          console.log(xountry)
    }catch(err){
      console.log(err)
    }
  })();