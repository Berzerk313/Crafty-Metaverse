document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.header-burger')
    .addEventListener("click", function (e) {
      const headerBurgerMenu = document.querySelector('.header-menu');
      const headerBurger = document.querySelector('.header-burger');
      const burgerBackdrop = document.querySelector('.burger-backdrop');

      if (document.body.classList.contains('lock')) {
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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let scrollPos = 10;
  let header = document.querySelector('.header')

  if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
    header.classList.add('header_background');
  }
  else {
    header.classList.remove('header_background');
  }
}

///////////////////////////

var swiper = new Swiper(".about-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".about__navigation-next",
    prevEl: ".about__navigation-prev",
  },
  // loop: true,
  spaceBetween: 30,
  updateOnWindowResize: true,
  breakpoints: {
    1920: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

//////////////////////////////

const accordionItems = document.querySelectorAll('.roadmap-item-info__item');

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("active");
  });
});

///////////////////////////////

const teamGroupItems = document.querySelectorAll('.team-group__item');

teamGroupItems.forEach(teamGroupItem => {
  teamGroupItem.addEventListener("click", () => {
    teamGroupItem.classList.toggle("active");
  });
});

//////////////////////////////

const faqItems = document.querySelectorAll('.faq-content__item');

faqItems.forEach(faqItem => {
  faqItem.addEventListener("click", () => {
    faqItem.classList.toggle("active");
  });
});

/////////////////////////////

var swiper = new Swiper(".social-swiper", {
  // loop: true,
  spaceBetween: 30,
  updateOnWindowResize: true,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },

    320: {
      slidesPerView: 1.75,
    },
  },
});

