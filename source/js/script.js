// const headerBurger = document.querySelector('.header-burger');
// const burgerBackdrop = document.querySelector('.burger-backdrop');
// const headerBurgerMenu = document.querySelector('.header-menu');

// if (headerBurger) {
//   headerBurger.addEventListener("click", function (e) {
//     if(document.body.classList.contains('lock')){
//       document.body.style.width = "auto";
//       headerBurger.classList.toggle('header-burger_shift')
//     } else {
//       document.body.style.width = document.body.clientWidth + 'px';
//       headerBurger.classList.toggle('header-burger_shift')
//     }
//     document.body.classList.toggle('lock');
//     // burgerBackdrop.classList.toggle('active')
//     headerBurger.classList.toggle('active');
//     headerBurgerMenu.classList.toggle('active');
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.header-burger')
  .addEventListener("click", function (e) {
    const headerBurgerMenu = document.querySelector('.header-menu');
    const headerBurger = document.querySelector('.header-burger');
    const burgerBackdrop = document.querySelector('.burger-backdrop');
      
    if(document.body.classList.contains('lock')){
      document.body.style.width = "auto";
      headerBurger.classList.toggle('header-burger_shift')
    } else {
      document.body.style.width = document.body.clientWidth + 'px';
      headerBurger.classList.toggle('header-burger_shift')
    }
    document.body.classList.toggle('lock');
    burgerBackdrop.classList.toggle('active')
    headerBurger.classList.toggle('active');
    headerBurgerMenu.classList.toggle('active');
  });
});


