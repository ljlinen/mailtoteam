//When a card is clicked, it should move into view

const servCards = document.querySelectorAll('.servCard');
const servContent = document.querySelector('.servContent');

servCards.forEach((card) => {
  card.addEventListener('click', () => {
    //card.style.transform = 'translateX(30vw)';
    servContent.scrollWidth = '40px'
  })
});

//When hamburger menu is clicked, it should transform into a '-'
//when clicked, menu contents should showup

const menu = document.querySelector('.menu');
const menuCancel = document.querySelector('.menu-cancel');
const menuContent = document.querySelector('.menu-content');

let clicked = false;

 menu.addEventListener('click', () => {
  
  if(!clicked) {
  menuContent.style.zIndex = '5';
  clicked = true;
  } else {
  menuContent.style.zIndex = '-5';
  clicked = false;
  }
});

menuCancel.addEventListener('click', () => {
  
  if(!clicked) {
  menuContent.style.zIndex = '5';
  clicked = true;
  } else {
  menuContent.style.zIndex = '-5';
  clicked = false;
  }
});