'use strict';


// const articlesList = {
//     name: 'Alunbrig '
// }
const row = document.querySelector('.row')
const articleRow = document.querySelector('.article-row')
let categoryClicked = false;
const categoryList = [{
    name: 'Alunbrig',
    articleCount: 8,
    relatedCategory: [{"Clinical Trails": 2}, {"Efficacy" : 1}, {"RWE": 2}]
},{
    name: 'Velcade',
    articleCount: 13,
    relatedCategory: []
},
{
    name: 'Pevondistate',
    articleCount: 13,
    relatedCategory: []
},
{
    name: 'Iclusig',
    articleCount: 13,
    relatedCategory: []
},
{
    name: 'Ninlaro',
    articleCount: 13,
    relatedCategory: []
},
{
    name: 'Pipeline',
    articleCount: 13 ,
    relatedCategory: []
},
{
    name: 'Mobocertinib',
    articleCount: 13 
},

{
    name: 'RWE',
    articleCount: 13 
},
{
    name: 'Clinical Trails',
    articleCount: 4 
},
{
    name: 'Cost',
    articleCount: 13 
},
{
    name: 'Health Economic',
    articleCount: 13 
},
{
    name: 'Efficacy',
    articleCount: 13 
},
]

const articleList = [
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Clinical Trails']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Clinical Trails']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Efficacy']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'RWE']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'RWE']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Cost']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Cost']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Alunbrig', 'Cost']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Clinical Trails', 'Velcade']
    },
    { 
        articleContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        articleCategory: ['Clinical Trails', 'Pevondistate']
    },
    
]

const showCategory = function(category) {
    row.innerHTML = ''
    categoryList.forEach((category) => {
        row.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${category.name.split(" ")[0].toLowerCase()}">${category.name}<span>${category.articleCount}</span></button>
       </div>`)
       
     })
}

showCategory('');


 const displayArticles = function(articleCategory = "All"){
    articleRow.innerHTML = " ";
    articleList.forEach((article) => {
        if(articleCategory == "All"){
            articleRow.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
            <div class="article-feed">
               <p>${article.articleContent}</p>
            </div>
         </div>`)
        } 
        else if(article.articleCategory.join(" ").includes(articleCategory)){
            articleRow.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
            <div class="article-feed">
               <p>${article.articleContent}</p>
            </div>
         </div>`)
        }
        
        
    })
     

 }

 displayArticles();

document.querySelector('.row').addEventListener('click', function(e){
    console.log(e.target.value)
//    let category =  e.target.textContent.split(" ")[0]
 if(!categoryClicked) {
    let categoryName =  e.target.firstChild.wholeText
    categoryClicked = e.target.firstChild.wholeText;
    displayArticles(categoryName)
    row.innerHTML = ''
        categoryList.forEach((category) => {
            if(category.name == categoryName){
                row.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
                    <button type="button" class="btn btn-outline-primary ${category.name.toLowerCase()}">${category.name} <span>${category.articleCount}</span></button>
                </div>`)
                category.relatedCategory.forEach(relCategory => {
                    let relCat = Object.keys(relCategory)[0];
                    let relArticleCount = Object.values(relCategory)[0]
                    row.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
                    <button type="button" class="btn btn-outline-primary ${relCat.toLowerCase()}">${relCat} <span>${relArticleCount}</span></button>
                </div>`)
                })
                
            }
        })
 }
 else {


 }

})