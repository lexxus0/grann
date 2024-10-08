import Swiper from 'swiper/bundle';

const swiperMobile = new Swiper('.bestsellers__slider_mobile.swiper', {
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 100,
  loop: true,

  pagination: {
    el: '.swiper-pagination.bestsellers__slider_mobile-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next.bestsellers__slider_mobile-btn_next',
    prevEl: '.swiper-button-prev.bestsellers__slider_mobile-btn_prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiperDesktop = new Swiper('.bestsellers__slider.swiper', {
  direction: 'horizontal',
  speed: 400,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next.bestsellers__slider-btn_next',
    prevEl: '.swiper-button-prev.bestsellers__slider-btn_prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});




document.querySelector('[data-open="catalog"]').addEventListener('click', () => {
  localStorage.setItem('catalogOpened', 'true');
  localStorage.removeItem('selectedMenu');
  window.location.href = 'catalog.html';
});
