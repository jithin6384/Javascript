'use strict';
$(document).ready(function() {
    $(".widget h2").click(
        function() {
            $(this).parent().toggleClass('active');
        }
    );
});


//Script to add tranition effect in header menu button ---> Added by Aman
$(".nav-btn").click(function() {
   $(this).toggleClass("open");
});

//Script to add active class to manu ---> Added by Aman
$('.nav-links a').click(function(e){
   $('.nav-links a').removeClass("active");
   $(this).addClass("active");
});


// Nested Tab script ---> Added by Aman
$("ul.nav-tabs a").click(function (e) {
 e.preventDefault();  
   $(this).tab('show');
});

 $(document).ready(function() {
     $('.trigger').click(function() {
     $('#pipeline-overlay').fadeIn(300);  
     });
     $('#pipeline-close').click(function() {
     $('#pipeline-overlay').fadeOut(300);
     });
     });

if(screen.width > 750) {

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
for(let i = 1; i <= 7 ; i++) {
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

for(let i = 1; i <= 9; i++){
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
    if(i == 4 ){
        return {4: rightConnector}
    }
    if(i == 5 || i == 6 ){
        return {4: rightConnector, 5: topConnector}
    }
    if(i == 7) {
        return {4: rightConnector, 5: topConnector, 7: topConnector }
    }

    if(i == 8) {
        return {3: topConnector, 6: rightConnector, 8: rightConnector}
    }
    if(i == 9 || i == 10 || i == 11) {
        return {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector}
    }
    if(i == 12 ){
        return {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector}
    }
    if(i == 13) {
        return {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 13: topConnector}
    }
    if(i == 14){
        return {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 13: topConnector }
    }
    if(i == 15 ){
      return  {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 13: topConnector, 15 : topConnector }
    }
    if(i == 16 ){
        return  {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 13: topConnector, 16 : rightConnector }
      }
      if(i == 17 ){
        return  {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 13: topConnector, 16 : rightConnector, 17: topConnector }
      }
    if(i == 18 ){
        return {4: rightConnector, 5: topConnector, 8: rightConnector, 9: topConnector, 12: rightConnector, 14: rightConnector, 15 : topConnector, 18: rightConnector }
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
    let index;
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
    //    e.preventDefault();
      if(e.target.textContent !== clickedCategory){
          if(categorySelect[e.target.textContent]) {
          displayCategoryonTab(categorySelect[e.target.textContent],rowCategory6)
          }
         clickedCategory = e.target.textContent;
      }
  });
  


}