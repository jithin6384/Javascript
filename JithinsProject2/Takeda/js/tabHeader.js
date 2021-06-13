'use strict';
if(screen.width < 991 && (screen.width > 750) ) {
const rowCategory = document.querySelector('.row-category');
const rowCategory2 = document.querySelector('.row-category2');
const rowCategory3 = document.querySelector('.row-category3');
//newly added step 1
const rowCategory4 = document.querySelector('.malignancies');
const rowCategory5 = document.querySelector('.solidTumors');
const rowCategory6 = document.querySelector('.therapeuticCategory');

const leftConnector = 'left-connector';
const rightConnector = 'right-connector';
const topConnector = 'connector-nine';
const toprightConnector = 'top-right-connector';
let clickedCategory = false;

let items = [];
// {title: ['TAK-981', '']},
// ];

let itemsPhase2 = [];
let itemsPhase3 = [];
for(let i = 1; i <= 15; i++) {
    items.push({title: [`TAK-98${i}`, '']})
}

for(let i = 1; i <= 6; i++) {
    itemsPhase2.push({title: ['TAK-902', 'Relapsed/Refractory C-Cell']})
}

for(let i = 1; i <= 5; i++) {
    itemsPhase3.push({title: ['TAK-901', 'Relapsed/Refractory D-Cell']})
}


// step 2
let malignancies = [];
let solidTumors = [];

for(let i = 1; i <= 8; i++){
    malignancies.push({title: ['TAK-007', 'Malignancies B-Cell'] })
}

for(let i = 1; i <= 8; i++){
    solidTumors.push({title: ['TAK-981', 'Malignancies A-Cell'] })
}


let categorySelect = {'Lymphomas': []};

for(let i = 1; i <= 4; i++){
    categorySelect['Lymphomas'].push({title: ['TAK-981', 'Lymphomas A-Cell'] })
}

//display connector

const getConnectors = function(i) {

    if(i == 4 || i ==5){
         return  {2: leftConnector};
    }
    if(i == 6 ){
        return {2: leftConnector, 6: rightConnector}
    }
    if(i == 7 || i == 8 ){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector}
    }
    if(i == 9  ){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector}
    }
    if(i == 10 || i == 11 ){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector}
    }
    if(i == 12 ){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector , 12: toprightConnector}
    }
    if(i == 13 ){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector , 12: toprightConnector, 13: topConnector}
    }
    if(i == 14  || i == 15){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector , 12: toprightConnector, 13: topConnector, 14: topConnector}
    }
    if(i == 16  || i == 17){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector , 12: toprightConnector, 13: topConnector, 14: topConnector, 16: topConnector}
    }
    if(i == 18){
        return {2: leftConnector, 6: rightConnector, 5: leftConnector, 8: topConnector, 10: topConnector , 12: toprightConnector, 13: topConnector, 14: topConnector, 16: topConnector, 18: toprightConnector}
    }
}

const showButtons = function(i,rowCat,items) {
    rowCat.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-sm-4 col-xs-6 ${i + 1}">
    <button type="button" class="btn btn-outline-primary ${items[i].title[0].split(" ")[0].toLowerCase()}">${items[i].title[0]} <br><span>${items[i].title[1]}</span></button>
</div>`)
}
const displayButtons = function(items, rowCat){
    for(let i = 0; i < items.length; i++){
        showButtons(i, rowCat, items)      
     }
}

const displayConnectors = function(rowCat){
 
  const connectors = getConnectors(rowCat.childElementCount);
  [...rowCat.children].forEach(function(category,index){
    if(Object.keys(connectors).includes(category.classList[3])){
        category.classList.replace(category.classList[3], connectors[category.classList[3]])   
    }
})

}
const displayCategoryonTab =  function(items, rowCat){
    displayButtons(items, rowCat)
    displayConnectors(rowCat);
}

//phase 1 
displayCategoryonTab(items, rowCategory);
//phase 2 
displayCategoryonTab(itemsPhase2, rowCategory2);
//phase 3
displayCategoryonTab(itemsPhase3, rowCategory3);


//Therapeutic Areas
//Newly Added step 3

displayCategoryonTab(malignancies, rowCategory4);

displayCategoryonTab(solidTumors, rowCategory5 )

//to display categories on click of header
document.querySelector('.tabbable').addEventListener('click', function(e){
     e.preventDefault();
    if(e.target.textContent !== clickedCategory){
        if(categorySelect[e.target.textContent]) {
        displayCategoryonTab(categorySelect[e.target.textContent],rowCategory6)
        }
       clickedCategory = e.target.textContent;
    }
});



}