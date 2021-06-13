'use strict';
 //Script to add tranition effect in footer ---> Added by Aman
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



if(screen.width > 991) {
const rowCategory = document.querySelector('.row-category');
const rowCategory2 = document.querySelector('.row-category2');
const rowCategory3 = document.querySelector('.row-category3');
//newly added step 1
const rowCategory4 = document.querySelector('.malignancies');
const rowCategory5 = document.querySelector('.solidTumors');
const rowCategory6 = document.querySelector('.therapeuticCategory');
let clickedCategory = false;

const leftConnector = 'left-connector';
const rightConnector = 'right-connector';
// TAK-007 <span>Relapsed/Refractory B-Cell</span>
let items = [
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-007', 'Relapsed/Refractory B-Cell'] },
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},
    // {title: ['TAK-981', 'Relapsed/Refractory A-Cell']},

];
// {title: ['TAK-981', '']},
// ];

let itemsPhase2 = [
     
];
let itemsPhase3 = [ 
    ];
 for(let i = 1; i <= 3; i++) {
     items.push({title: [`TAK-98${i}`, 'Relapsed/Refractory A-Cell']})
 }

for(let i = 1; i <= 10; i++) {
    itemsPhase2.push({title: ['TAK-902', 'Relapsed/Refractory C-Cell']})
}

for(let i = 1; i <= 18; i++) {
    itemsPhase3.push({title: ['TAK-901', 'Relapsed/Refractory D-Cell']})
}
// step 2
let malignancies = [];
let solidTumors = [];

for(let i = 1; i <= 9; i++){
    malignancies.push({title: ['TAK-007', 'Malignancies B-Cell'] })
}

for(let i = 1; i <= 10; i++){
    solidTumors.push({title: ['TAK-981', 'Malignancies A-Cell'] })
}


let categorySelect = {'Lymphomas': []};

for(let i = 1; i <= 4; i++){
    categorySelect['Lymphomas'].push({title: ['TAK-981', 'Lymphomas A-Cell'] })
}

const getConnectors = function(itemLength){
    if(itemLength == 3 ){
        return {2: leftConnector};
    }
    if(itemLength == 4) {
     return {2: leftConnector};
    }
    if(itemLength == 5){
        return {2: leftConnector, 3: leftConnector}
    }
    if(itemLength == 6){
     return {2: leftConnector, 3: leftConnector}
    }
    if(itemLength == 7){
        return {2: leftConnector, 3: leftConnector, 6: leftConnector}
    }
    if(itemLength == 8){
        return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector}
    }
    if(itemLength == 9){
        return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector, 9: 'connector-nine'}
    }
    if(itemLength == 10){
        return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector,  10: 'connector-nine'}
    }
    if(itemLength == 11){
     return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector, 9: 'connector-nine', 10: 'connector-nine', 11: 'connector-nine'}
    }
    if(itemLength == 12){
        return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector, 9: 'connector-nine', 10: 'connector-nine', 11: 'connector-nine', 12: 'connector-nine'}
    }
    if(itemLength == 13){
        return {2: leftConnector, 4: leftConnector, 6: leftConnector, 7: rightConnector, 9: 'connector-nine', 10: 'connector-nine', 11: 'connector-nine', 12: 'connector-nine', 13: 'connector-nine'}
    }
    if(itemLength == 14) {
        return {2: leftConnector, 4: leftConnector,6: leftConnector, 9: rightConnector, 7: rightConnector, 9: 'connector-nine', 10: leftConnector,11: rightConnector, 12: rightConnector, 14: 'connector-nine'}
    }
    if(itemLength == 15){
        return {2: leftConnector, 4: leftConnector,6: leftConnector, 9: rightConnector, 7: rightConnector, 9: 'connector-nine', 10: leftConnector,11: rightConnector, 12: rightConnector, 14: 'connector-nine', 15: 'connector-nine'}
    }
    if(itemLength == 16){
        return {2: leftConnector, 4: leftConnector,6: leftConnector, 9: rightConnector, 7: rightConnector, 9: 'connector-nine', 10: leftConnector,11: rightConnector, 12: rightConnector, 14: 'connector-nine', 15: 'connector-nine', 16: 'connector-nine'}
 }
 if(itemLength == 17){
    return {2: leftConnector, 4: leftConnector,6: leftConnector, 9: rightConnector, 7: rightConnector, 9: 'connector-nine', 10: leftConnector,11: rightConnector, 12: rightConnector, 14: 'connector-nine', 15: 'connector-nine',16: 'connector-nine', 17: 'connector-nine'}
 }
 if(itemLength == 18){
    return {2: leftConnector, 4: leftConnector,6: leftConnector, 9: rightConnector, 7: rightConnector, 9: 'connector-nine', 10: leftConnector,11: rightConnector, 12: rightConnector, 14: 'connector-nine', 15: 'connector-nine',17: 'connector-nine', 18: 'connector-nine'}
 }
}


//conditions to follow while displaying

//1....items count is between 1 to 5 


const createEmptySpace = function(rowCat){
    rowCat.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
    </div>`)
}

const showButtons = function(i,rowCat, items) {
    rowCat.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
    <button type="button" class="btn btn-outline-primary ${items[i].title[0].split(" ")[0].toLowerCase()}">${items[i].title[0]} <br><span>${items[i].title[1]}</span></button>
   </div>`)
}

const showRemainingItems = function(remainingItems,items, rowCat){
    // remaining Item can range from 3 to 5
    // if remaining item is 3  ...1 2 
    //............................3
    if(remainingItems <= 3) {
        for(let i = 0; i < 3; i++){
            if(i == 2){
               createEmptySpace(rowCat); 
               createEmptySpace(rowCat);
               if(items[i]) showButtons(i, rowCat, items);
            }
            else {
            if(items[i]) showButtons(i, rowCat, items);
            }
        }
    }
    //if remaining Items are more than 4 
    if(remainingItems >= 4) {
        for(let i = 0; i < remainingItems; i ++) {
            if(i == 3) {
                createEmptySpace(rowCat);
                if(items[i]) showButtons(i, rowCat, items);
            }
            else{
            if(items[i]) showButtons(i, rowCat, items);
            }
            console.log(`remaining Items: ${remainingItems}`)
            console.log(`item number: ${i}`)
        }
    }
}

//2. Items comes in rows of 4

const showCategory = function(itemsLength,items, rowCat){
    for(let i = 0; i < itemsLength; i ++) {
        if(items[i]) showButtons(i, rowCat, items);
     }
}





//phase 2 





//displaying buttons onScreen 

//1. Item Count is between 1 to 5 ...
const displayButtononScreen = function(items, rowCat){
        let initialRows;
        let remainingItems;
        if(items.length <= 5 ){
            showRemainingItems(items.length, items, rowCat);
        }
        if(items.length == 6) showCategory(items.length,items, rowCat) ;


        if(items.length > 6) {
        //(Math.floor(2.75) - 1)
        initialRows = Math.floor(items.length/4);
        if(initialRows < 2) {
            remainingItems = (items.length/4) - initialRows;
            remainingItems = remainingItems/.25

        }
        if(initialRows >= 2 ){
            remainingItems = (items.length/4) - (initialRows -1);
            console.log(`initalRows1: ${initialRows}`, `remainingRows2: ${remainingItems}`);
            if(remainingItems > 1.5 ){
                // initialRows += 1 ;
                remainingItems -= 1;
                remainingItems = remainingItems/.25
            }
            if(remainingItems == 1) {
                remainingItems = remainingItems/.25;
                initialRows -= 1;
            }
            if(remainingItems <= 1.5){
                remainingItems = remainingItems/.25;
                initialRows -= 1;

            }
        }
            console.log(`initalRows: ${initialRows}`, `remainingItems: ${remainingItems}`);

            showCategory(initialRows * 4,items, rowCat)
        
        if(remainingItems == 6 ){
            showCategory(remainingItems,items.slice((items.length - remainingItems), items.length), rowCat );
        }else{

            showRemainingItems(remainingItems,items.slice((items.length - remainingItems), items.length), rowCat);

        }
        
        }

        ///display connectors


        //1.get index for connectors


        let y = 0;
        const getIndexes = function(){
            
            let i = 0;
            while(i < [...rowCat.children].length){
                if(rowCat.children[i].firstElementChild){
                    rowCat.children[i].classList.add(`${y+1}`)
                    console.log(`y: ${y}`)
                    
            
                }
                if(!rowCat.children[i].firstElementChild) {
                    y = y - 1;
                }

                i +=1 ;
                y +=1;
            }
        }

        getIndexes();


        const displayConnectors = function(){
                const connectors = getConnectors(y);
                console.log(y)
                console.log('connectors')
                console.log(connectors);
                [...rowCat.children].forEach(function(category,index){
                    if(Object.keys(connectors).includes(category.classList[1])){
                        category.classList.replace(category.classList[1], connectors[category.classList[1]])   
                    }
                })
            
        } 

        displayConnectors();
}


//Phase 1 

 displayButtononScreen(items, rowCategory);

// //phase 2 
  displayButtononScreen(itemsPhase2, rowCategory2 );

//phase 3

 displayButtononScreen(itemsPhase3, rowCategory3);


//Therapeutic Areas
//Newly Added step 3

displayButtononScreen(malignancies, rowCategory4);

displayButtononScreen(solidTumors, rowCategory5 )


//


document.querySelector('.tabbable').addEventListener('click', function(e){
    if(e.target.textContent !== clickedCategory){
        if(categorySelect[e.target.textContent]) {
           displayButtononScreen(categorySelect[e.target.textContent],rowCategory6)
        }
        clickedCategory = e.target.textContent;
    }
});

document.querySelectorAll('.trigger').forEach(function(showPopup){
    //for display popup
})





}



































