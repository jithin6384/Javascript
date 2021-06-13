'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



const getJson = function(url){
    return fetch(url).then(response => response.json());
    
    
}

// const getJson = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
//       return response.json();
//     });
//   };

const get3countries = async function(c1,c2,c3){



const data = await Promise.all([
        getJson(`https://restcountries.eu/rest/v2/name/${c1}`),

        getJson(`https://restcountries.eu/rest/v2/name/${c2}`),

        getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
]);
console.log(data.map(d => d[0].capital))
}

get3countries('portugal', 'germany', 'canada')