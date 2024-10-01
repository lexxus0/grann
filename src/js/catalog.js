import { getCatalog } from './api';
import Swiper from 'swiper/bundle';


const catalogContainer = document.querySelector('[data-action="catalog"]');

document.addEventListener('DOMContentLoaded', () => {
  const catalogOpened = localStorage.getItem('catalogOpened');

  if (catalogOpened === 'true') {
    runCatalog();
  }
});



function initializeSwiper() {
  const swiperRev = new Swiper('', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '',
      prevEl: '',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}

async function runCatalog() {
  const catalogArray = await getCatalog();
  createMarkupCatalog(renderMarkupCatalog, catalogArray);
  initializeSwiper();
};

function renderMarkupCatalog(array) {
  return array
    .map(
      (ar) => `
        <li class="swiper-slide">
            <a href="" class="">
                <img 
                    class=""
                    data-src="" 
                    alt="commentator's photo" 
                />
                <h3 class="">${ar.author}</h3>
                <p class="">${ar.review}</p>
            </a>
        </li>`
    )
    .join('');
}

function createMarkupCatalog(callback, array) {
  catalogContainer.insertAdjacentHTML('beforeend', callback(array));
}