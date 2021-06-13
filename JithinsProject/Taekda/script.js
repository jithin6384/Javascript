'use strict';

const rowCategory = document.querySelector('.row-category');

let items = [{
    title: 'Alunbrig',
    color: '#da5283'

}, {
    title: 'Velcade',
    color: '#da5283'
}, {
    title: 'Pevondistate',
    color: '#da5283'
}, {
    title: 'Iclusig',
    color: '#da5283'
}, {
    title: 'Ninl',
    color: '#da5283'
}, {
    title: 'Pipeline',
    color: '#da5283'
}, {
    title: 'Mobocertinib',
    color: '#da5283'
}, {
    title: 'Clinical Trails',
    color: '#9b72b0'
}, {
    title: 'Dummy Button1',
    color: '#9b72b0'
}, {
    title: 'Dummy Button 2',
    color: '#4c9bcf'
}, {
    title: 'Dummy Button3',
    color: '#4c9bcf'
}, {
    title: 'Dummy Button4',
    color: '#4c9bcf'
}, {
    title: 'Dummy Button5',
    color: '#da5283'
}, {
    title: 'Dummy Button6',
    color: '#4c9bcf'
}, {
    title: 'Dummy Button7',
    color: '#9b72b0'
}, {
    title: 'Dummy Button8',
    color: '#4c9bcf'
}, {
    title: 'Dummy Button9',
    color: '#da5283'
}, {
    title: 'Dummy Button10',
    color: '#4c9bcf'
}];


//aligniment based on documenation

//categories should be equal or less than 18 



const showCategory = function(categoryName) {
    rowCategory.innerHTML = ''
    items.forEach((category) => {
        rowCategory.insertAdjacentHTML('beforeend', `<div class="col-lg-3">
        <button type="button" class="btn btn-outline-primary ${category.title.split(" ")[0].toLowerCase()}">${category.title}</button>
       </div>`)
       
     })
}

showCategory('');


