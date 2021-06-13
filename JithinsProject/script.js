 'use strict';

const row = document.querySelector('.row');
const articleRow = document.querySelector('.article-row');
const rowCategory = document.querySelector('.row-category');
const crossButton = document.querySelector('.show-cross-button');
let categoryClicked = false;
let parentElement;
let categoryIndex = {};

const categoryList = [{
    name: 'Alunbrig',
    articleCount: 5,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},{
    name: 'Velcade',
    articleCount: 13,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},
{
    name: 'Pevondistate',
    articleCount: 13,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},
{
    name: 'Iclusig',
    articleCount: 13,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},
{
    name: 'Ninlaro',
    articleCount: 13,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},
{
    name: 'Pipeline',
    articleCount: 13 ,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},
{
    name: 'Mobocertinib',
    articleCount: 13 ,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},

{
    name: 'RWE',
    articleCount: 13 ,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"Mobocertinib": 2}]
},
{
    name: 'Clinical Trails',
    articleCount: 4 ,
    relatedCategory:  [{"RWE": 2}, {"Efficacy" : 1}, {"Mobocertinib": 2}]
},
{
    name: 'Cost',
    articleCount: 13 ,
    relatedCategory:  [{"RWE": 2}, {"Efficacy" : 1}, {"Mobocertinib": 2}]
},
{
    name: 'Health Economic',
    articleCount: 13 ,
    relatedCategory:  [{"RWE": 2}, {"Efficacy" : 1}, {"Mobocertinib": 2}]
},
{
    name: 'Efficacy',
    articleCount: 13 ,
    relatedCategory:  [{"RWE": 2}, {"Cost" : 1}, {"Mobocertinib": 2}]
},
]

const articleList = [
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },]

for(let i = 0; i < categoryList.length; i++){
    // categoryList[i].name  =  categoryIndex[i]  ;
    categoryIndex[categoryList[i].name] = i ;
    // {0: 'Alunbrig', 1: 'velcade', 2: }
}
console.log('category Index')
console.log(categoryIndex)

const showCategory = function(categoryName) {
    rowCategory.innerHTML = ''
    categoryList.forEach((category) => {
        row.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${category.name.split(" ")[0].toLowerCase()}">${category.name}<span>${category.articleCount}</span></button>
       </div>`)
       
     })
}

showCategory('');

const displayRelatedCategory = function(parentCategory){
    let relCategory = parentCategory.relatedCategory;
    rowCategory.innerHTML = ""
    rowCategory.insertAdjacentHTML('beforeend',`<div class="col-lg-3">
    <button type="button" class="btn btn-outline-primary ${parentCategory.name.toLowerCase()}">${parentCategory.name}<span>${parentCategory.articleCount}</span></button>
   </div>`)
    relCategory.forEach(category => {
        const categoryName = Object.keys(category)[0];
        const articleCount = Object.values(category)[0];
        rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${categoryName.toLowerCase()}">${categoryName}<span>${articleCount}</span></button>
       </div>`)
    })
}

//displaying cross buttons

const displayCrossButton = function(category){
  crossButton.insertAdjacentHTML('beforeend', `<div class="col-lg-3 ${category.toLowerCase()}">
  <button type="button" class="btn btn-outline-primary ">${category}<i class="fa fa-close"></i></button>
</div>`)
}

//show articles 

const displayArticles = function(articleCount){ 
     articleRow.innerHTML = "";
     let i = 0; 
     while(i < articleCount ) {
        articleRow.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <div class="article-feed">
           <p>${articleList[0].articleContent}</p>
        </div>
     </div>`)
      i += 1 ;
     }
    
}


//display child category and Articles

const displayChildCategoryArticle = function(parentCategory, childCategory){
    console.log('parent category and child category');
    console.log(parentCategory, childCategory)
    let categoryName ;
    let categoryArticleCount;
    //displaying category 
    rowCategory.innerHTML = ""
    rowCategory.insertAdjacentHTML('beforeend',`<div class="col-lg-3">
   <button type="button" class="btn btn-outline-primary ${parentCategory.name.toLowerCase()}">${parentCategory.name}<span></span></button>
  </div>`)
   parentCategory.relatedCategory.forEach(cat => {
       if(Object.keys(cat)[0] == childCategory){
        categoryName = Object.keys(cat)[0];
        categoryArticleCount = Object.values(cat)[0];
        rowCategory.insertAdjacentHTML('beforeend',`<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${categoryName.toLowerCase()}">${categoryName}<span>${categoryArticleCount}</span></button>
       </div>`)
       }
   })
    //displaying articles
    displayArticles(categoryArticleCount)
}


//Click to show category and article
rowCategory.addEventListener('click', function(e){
   
  if(e.target.classList.contains('btn') && (crossButton.children.length < 2)){
    if(!categoryClicked) {
        let categoryName =  e.target.firstChild.wholeText
        categoryClicked = e.target.firstChild.wholeText;
        parentElement = categoryClicked;
        let index = categoryIndex[categoryName];
        if((index == 0) || index) {
            let category = categoryList[index] ;
            displayRelatedCategory(category)
            
            //display Article count
            displayArticles(category.articleCount)
    
            //displaying cross button
            //see if cross button is already there
          
            if(crossButton.children.length === 0) {
                
            displayCrossButton(category.name)
            }
            
            
        }
      }
      else if(e.target.firstChild.wholeText != categoryClicked) {
        let index = categoryIndex[categoryClicked]
        if((index == 0) || index) {
            let category = categoryList[index] ;
            // displayRelatedCategory(categoryClicked,category.relatedCategory)
            //display Article count
            // displayArticles(category)
            displayChildCategoryArticle(category,e.target.firstChild.wholeText )
    
            //displaying cross button for child element
           
               displayCrossButton(e.target.firstChild.wholeText)
            // categoryClicked = false;
        }
      
      }

  } 
  
  
});


//Handling Click for cross button 


crossButton.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-close')){
        //selecting clicked element
        let category = e.target.parentElement.textContent;
        let siblings = e.target.closest('.show-cross-button').children;
           if(siblings.length > 1){
                //1. parent button should disappear
                crossButton.removeChild(e.target.parentElement.parentElement);
              
                //btn-outline-primary
                //2. display children of child category
                let index = categoryIndex[parentElement]
                displayRelatedCategory(categoryList[index])
            
                //display Article count
                displayArticles(categoryList[index].articleCount)
            }
            else{
                location.reload();
            }

        
          
    }

});