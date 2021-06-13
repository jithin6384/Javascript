'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const dotContainer = document.querySelector('.dots');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function(btn){
  btn.addEventListener('click', openModal);
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/////////////////////////////////////////////////////
////////////////////
////////////////////////////////////////////////////



// console.log(allSections)

const allButtons = document.getElementsByTagName('button')

//Creating Element

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'We use cookie for improved functionality and Analytics <button class="btn btn-close-cookie">Got it </button>';


//Inserting Element

header.append(message);

//deleting

document.querySelector('.btn-close-cookie').addEventListener('click', function(){
  header.remove(message)
})


///lecture 184


//styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.width);
// // console.log(getComputedStyle(message))
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)

message.style.height = parseFloat(getComputedStyle(message).height) + 40 + 'px';


//Attribute Selector 

const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)

// console.log(logo.href)

//Non standard 

// console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'bankist')

//data-attributes
// console.log(logo.dataset.versionNumber)

//classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');


///lecture 187
///smooth scrolling



btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)
  // console.log(e.target.getBoundingClientRect());
  // console.log(`Current scroll position ${window.pageXOffset} ${window.pageYOffset}`)
  // console.log(`height/width viewport`, document.documentElement.clientHeight,
  // document.documentElement.clientWidth)

  //scroll To
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   )

  window.scrollTo({
   left: s1coords.left + window.pageXOffset, 
   top: s1coords.top + window.pageYOffset,
   behavior: 'smooth',
  })

  //modern approach
  // section1.scrollIntoView({behavior: 'smooth'})
})


///189.EventDelegation Impementing page navigation

///using forEach method

// document.querySelectorAll('.nav__link').forEach(function(el){
//    el.addEventListener('click', function(e){
//      e.preventDefault();
//     //  console.log(this.href)
//    
//    })
// })


//through Event Delegation

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  // console.log(e.target)
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id)
    // debugger
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

///191 Building a Tabbed Component



tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  if(clicked){
     tabs.forEach((el)=>{
       el.classList.remove('operations__tab--active')
     })
     tabContents.forEach(c => c.classList.remove('operations__content--active'))
      clicked.classList.add('operations__tab--active');
    // console.log(clicked);

    //Activating content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  }
})


///192 Passing Arguments to Event Handlers
///Menu fade animation

//Handle Hover
const handleHover = function(e){
      if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        // debugger
        // console.log(logo, siblings, link)
        // console.log(opacity)
        siblings.forEach(el => {
          if(el !== link)el.style.opacity = this ;
        })
        logo.style.opacity = this;
      }
}


// nav.addEventListener('mouseover', function(e){
//   debugger
// })
nav.addEventListener('mouseover',handleHover.bind(0.5))

nav.addEventListener('mouseout',handleHover.bind(1))


//////////
//194 Sticky navigation: Intersection Observer API
/////////////

///This Api allows code to basically observe changes when a certain target element intersects other element
//or it intersects the viewport
//observer here will basically observe certain target



// const obsCallback = function(entries, observer){
//    entries.forEach(entry => {
//      console.log(entry)
//    })
//     //  console.log(observer)
// }


// //root is the element target is intersecting, target here is nav
// const obsOptions = {
//   root: null,
//   threshold: 0
// }


// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1)

// console.log(observer)

const stickyNav = function(entries){
  //not necessary to  loop over an array as threshold is only one element and not array
  const [entry] = entries;
  // console.log(entry)
  if(!entry.isIntersecting){
    nav.classList.add('sticky')
  }
  else nav.classList.remove('sticky')

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`
});

headerObserver.observe(header)

///lecture 195 
///Reveal section elements on Scroll



const revealSection = function(entries, observer){
  const [entry] = entries;
  // console.log(entry)
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

//section--hidden

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section){
  sectionObserver.observe(section)
  // section.classList.add('section--hidden');
})

//197 Lazy loading Images

const loadImg = function(entries, observer){
  const [entry] = entries;
  // console.log(entry)
  console.log(entry.target)
  if(!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target);
}

const imgTargets = document.querySelectorAll('img[data-src]');
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
})

imgTargets.forEach(img => {
  imgObserver.observe(img)
});


///197 slider component

const slides = document.querySelectorAll('.slide') ;
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right')
let curSlide = 0 ;
const maxSlide = slides.length - 1;


const slider = document.querySelector('.slider') ;

// slider.style.transform = 'scale(0.4) translateX(-100px)';
// slider.style.overflow = 'visible';  
// slides.forEach((s, i) => s.style.transform = `translateX${100 * (i) }%`)

// slides.forEach(function(s,i){
//   s.style.transform = `translateX(${100 * (i-1)}%)`;
//   // debugger
//   // console.log(s.style.transform)
// })

const createDots = function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class='dots__dot' data-slide=${i}></button>`)
  })
}




const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(function(dot){
    dot.classList.remove('dots__dot--active')
  })
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

const goToSlide = function(slide){
  slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)
}

function init(){
  createDots();
  activateDot(0);
  goToSlide(0);
}

init();

//Next Slide;
const nextSlide = function(){
  if(curSlide === maxSlide){
    curSlide = 0;
  }else {
    curSlide++;
  }
  goToSlide(curSlide)
  activateDot(curSlide);
}

//previous Slide
const prevSlide = function(){
  if(curSlide > 0){
  curSlide--;
  }else{
    curSlide = maxSlide;
  }
  goToSlide(curSlide)
  activateDot(curSlide);
}
sliderBtnRight.addEventListener('click',nextSlide);
sliderBtnLeft.addEventListener('click', prevSlide);

///198 
////////////////////////////////

document.addEventListener('keydown',function(e){
  
  if(e.key === 'ArrowRight') nextSlide() ;
  if(e.key === 'ArrowLeft') prevSlide();
})
      



dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
     const {slide} = e.target.dataset;
     goToSlide(slide);
     activateDot(slide);
  }
})



























//function to display current slide

// const displaySlide = function(curSlide){
//   if(curSlide < slides.length){
//       for(const slide of [...slides]){
//         if(slide != slides[curSlide]){
//           slide.style.opacity = 0 ;
//         }
//         else {
//           slide.style.opacity = 1;
//         }
//       }
//    }
//    else{
//      curSlide = 0 ;
//      displaySlide(curSlide);
//    }
   
// }

// displaySlide(0);
























