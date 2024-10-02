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
  const swiperRev = new Swiper('.catalog__swiper', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.catalog__swipBtn--next',
      prevEl: '.catalog__swipBtn--prev',
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
        <li class="swiper-slide catalog__itemSwip">
            <a href="" class="catalog__linkSwip">
                <img 
                    class="catalog__imgSwip"
                    src="${ar.image}" 
                    alt="commentator's photo" 
                    lazy="loading"
                />
                <div class="catalog__containarAboutSwip">
                  <h3 class="catalog__titleSecondarySwip">${ar.name}</h3>
                  <button class="catalog__btnCartSwip">
				            <svg class="catalog__iconCartSwip">
				              <use href="./img/svg/symbol-defs.svg#cart"></use>
				            </svg>
			            </button>
                </div>
                
                <p class="">${ar.price}</p>
            </a>
        </li>`
    )
    .join('');
}

function createMarkupCatalog(callback, array) {
  catalogContainer.insertAdjacentHTML('beforeend', callback(array));
}