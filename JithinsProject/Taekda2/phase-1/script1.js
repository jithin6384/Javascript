'use strict';

const rowCategory = document.querySelector('.row-category');
const leftConnector = 'right-connector';
const rightConnector = 'left-connector';

let items = [];

for(let i = 1; i <= 5; i++) {
    items.push({title: 'dummy Text'})
}


const getConnectors = function(itemLength){
   if(itemLength == 3 ){
       return {2: [leftConnector]};
   }
   if(itemLength == 4) {
    return {2: [leftConnector]};
   }
   if(itemLength == 5){
       return {2: [leftConnector], 3: [leftConnector]}
   }
   if(itemLength == 6){
    return {2: [leftConnector], 3: [leftConnector]}
   }
   if(itemLength == 7){
       return {2: [leftConnector], 3: [leftConnector], 6: [leftConnector]}
   }
   if(itemLength == 8){
       return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector]}
   }
   if(itemLength == 9){
       return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector]}
   }
   if(itemLength == 10){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector]}
   }
   if(itemLength == 11){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector]}
   }
   if(itemLength == 12){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector], 8: [leftConnector], 10: [leftConnector]}
   }
   if(itemLength == 13){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector], 8: [leftConnector], 10: [leftConnector], 11: [leftConnector]}
   }
   if(itemLength == 14) {
       return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector], 10: [leftConnector], 11: [leftConnector]   }
   }
   if(itemLength == 15){
       return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector], 7: [leftConnector], 10: [leftConnector], 11: [leftConnector], 14: [leftConnector]}
   }
   if(itemLength == 16){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector, rightConnector], 7: [leftConnector], 10: [leftConnector], 11: [leftConnector], 14: [leftConnector]}
}
if(itemLength == 17){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector, rightConnector], 7: [leftConnector], 10: [leftConnector], 11: [leftConnector], 14: [leftConnector], 15: [leftConnector]}
}
if(itemLength == 18){
    return {2: [leftConnector, rightConnector], 4: [leftConnector], 6: [leftConnector, rightConnector], 7: [leftConnector], 10: [leftConnector], 11: [leftConnector], 14: [leftConnector], 15: [leftConnector]}
}
   


}






















// items.push({title: 'Dummy button9', color: '#4c9bcf'});
//aligniment based on documenation

//categories should be equal or less than 18 

//requirements
//max items = 18
//1. number of rows  = items.length/ 4 
//2. Logic for remaining rows
//3. example items  = 9;
//4. 9/4 --> 3.25 - 1 = 2.25
//5. rows1 = 2 
//6. rows remaining 1.25;

// This code will run for rows1 
const showCategory = function(itemsLength) {
    // rowCategory.innerHTML = ''
    console.log(itemsLength)
    
   for(let i = 0; i < itemsLength; i ++) {
       if(!items[i]) {
        debugger
       }
        rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${items[i].title.split(" ")[0].toLowerCase()} ">${items[i].title}</button>
       </div>`)
     }


}

// showCategory(17);
const showRemainingItems = function(remainingItems){
      if(remainingItems == 3) {
          for(let i = 0; i <= 3; i++){
              if(i == 2 || i == 3) {
                rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
                
                </div>`)
              }
              else {
              rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${items[i].title.split(" ")[0].toLowerCase()}">${items[i].title}</button>
       </div>`)
              }
          }
          rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${items[2].title.split(" ")[0].toLowerCase()}">${items[2].title}</button>
       </div>`)
      }
      else {
        for(let i = 0; i < remainingItems; i++  ){
        
            if( i == 3 ) {
                rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
                
               </div>`)
              }
                rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${items[i].title.split(" ")[0].toLowerCase()}">${items[i].title}</button>
       </div>`)
            
          
        }
      }
}


 
const displayConnectors = function(){
    myNode.removeChild(myNode.lastChild);
    let itemsLength = 0 ;
    for(let i = 0; i < [...rowCategory.children].length; i++){
        if ([...rowCategory.children][i].firstElementChild) {
           itemsLength += 1 
        }
        if(![...rowCategory.children][i].firstElementChild) {
            rowCategory.removeChild(rowCategory.children[i])
        }
    }
    const connectors = getConnectors(itemsLength);
    // console.log(connectors);

    for(let i =0; i < itemsLength; i++){
        if(connectors[i+1]){
          
        [...rowCategory.children][i].classList.add(...connectors[i+1])
        }
    }
}




let initialRows = (items.length/4 > 2 ) ? (Math.floor(items.length / 4 - 1)) : (Math.floor(items.length / 4)) ;
let remainingRows = (items.length/4) - (initialRows);

console.log(initialRows, remainingRows);
 

 let remainingItems = remainingRows/ .25
 if(remainingItems > 5 ){
     remainingItems = 2 ;
     initialRows += 1; 
 }
 showCategory(initialRows*4); 
 showRemainingItems(remainingItems);


 displayConnectors();