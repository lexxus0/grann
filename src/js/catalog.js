import { getCatalog } from './api';
import Swiper from 'swiper/bundle';


const catalogContainer = document.querySelector('[data-action="catalog"]');

document.addEventListener('DOMContentLoaded', () => {
  const catalogOpened = localStorage.getItem('catalogOpened');

  if (catalogOpened === 'true') {
    runCatalog(getCatalog());
  }
});

async function runCatalog(get) {
  const catalogArray = await get;
  createMarkupCatalog(renderMarkupCatalog, catalogArray);
  initializeSwiper();
};

function renderMarkupCatalog(array) {
  return array
    .map(
      (ar) => `
        <li class="swiper-slide catalog__itemSwip">
            <a href="../list_info.html" class="catalog__linkSwip data-list">
                <img class="catalog__imgSwip"
                  src="${ar.image}" 
                  alt="commentator's photo" 
                  lazy="loading"
                />
              <div class="catalog__containarElSwip">
                <div>
                  <h3 class="catalog__titleSecondarySwip">${ar.name}</h3>
                  <p class="catalog__priceSwip">${ar.price}</p>
                </div>
                <button class="catalog__btnCartSwip">
				          <svg class="catalog__iconCartSwip">
				              <use href="./img/svg/symbol-defs.svg#cart"></use>
				          </svg>
			          </button>
              </div>
            </a>
        </li>`
    )
    .join('');
}

function createMarkupCatalog(callback, array) {
  catalogContainer.insertAdjacentHTML('beforeend', callback(array));
}

function initializeSwiper() {
  const swiperCat = new Swiper('.catalog__swiper', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.catalog__swipBtn--next',
      prevEl: '.catalog__swipBtn--prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 5,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 5,
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 5,
        },
      },
    },
    pagination: {
      el: '.catalog__pagination',
      clickable: true,
      renderBullet: function (index, catalog__bullet) {
        return '<span class="' + catalog__bullet + '">' + (index + 1) + '</span>';
      },
    },
  });
}

let swiperBtn;
function initSwiperBtn() {
  if (window.innerWidth <= 480) {
    if (!swiperBtn) {
      swiperBtn = new Swiper('.btn__swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
      });
    }
  } else {
    if (swiperBtn) {
      swiperBtn.destroy(true, true);
      swiperBtn = undefined;
    }
  }
}
initSwiperBtn();
window.addEventListener('resize', initSwiperBtn);