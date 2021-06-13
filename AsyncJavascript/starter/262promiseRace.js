'use strict';

const getJson = function(url){
    debugger
    return fetch(url).then(response => response.json());
    
    
}

// (async function(){
//    const res = await Promise.race([
//     getJson(`https://restcountries.eu/rest/v2/name/itally`),

//     getJson(`https://restcountries.eu/rest/v2/name/portugal`),

//     getJson(`https://restcountries.eu/rest/v2/name/canada`)
//    ]);
//    console.log(res[0])
// })();


// Promise.race
(async function () {
    const res = await Promise.race([
      getJSON(`https://restcountries.eu/rest/v2/name/italy`),
      getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
      getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
    ]);
    console.log(res[0]);
  })();