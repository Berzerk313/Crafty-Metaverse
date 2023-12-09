const headerBurger = document.querySelector('.header-burger');
const burgerBackdrop = document.querySelector('.burger-backdrop')

if (headerBurger) {
  const headerBurgerMenu = document.querySelector('.header-menu');
  headerBurger.addEventListener("click", function (e) {
    if(document.body.classList.contains('lock')){
      document.body.style.width = "auto";
      headerBurger.classList.toggle('.header-burger_shift')
    } else {
      document.body.style.width = document.body.clientWidth + 'px';
      headerBurger.classList.toggle('.header-burger_shift')
    }
    document.body.classList.toggle('lock');
    burgerBackdrop.classList.toggle('active')
    headerBurger.classList.toggle('active');
    headerBurgerMenu.classList.toggle('active');
  });
}