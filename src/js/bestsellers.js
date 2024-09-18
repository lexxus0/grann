import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.bestsellers__slider.swiper', {
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 100,
  loop: true,

  pagination: {
    el: '.swiper-pagination.bestsellers__slider-pagination',
    clickable: true,
  },
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
    }
  }
});

swiper();
