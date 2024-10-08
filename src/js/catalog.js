import { getCatalog } from './api'; //   getCatalog повертає всі елементи
import Swiper from 'swiper/bundle';

const catalogContainer = document.querySelector('[data-action="catalog"]');

document.addEventListener('DOMContentLoaded', () => {
  const catalogOpened = localStorage.getItem('catalogOpened');
  
  if (catalogOpened === 'true') {
    // Запит для отримання всього каталогу
    fetchAllCatalogItems();
  }
});

// Функція для отримання всіх елементів каталогу
async function fetchAllCatalogItems() {
  const catalogArray = await getCatalog(); // Отримуємо всі елементи каталогу
  const selectedCategory = localStorage.getItem('selectedMenu'); // Отримуємо категорію з локального сховища
  
  // Фільтруємо елементи в залежності від вибраної категорії
  const filteredCatalogArray = selectedCategory 
    ? catalogArray.filter(item => item.category === selectedCategory) // Змінити item.category на відповідну категорію
    : catalogArray; // Якщо категорія не вибрана, беремо всі елементи

  runCatalog(Promise.resolve(filteredCatalogArray)); // Рендеримо відповідні елементи
}

// Основна функція рендерингу
async function runCatalog(get) {
  const catalogArray = await get;
  createMarkupCatalog(renderMarkupCatalog, catalogArray);
  initializeSwiper();
}

function renderMarkupCatalog(array) {
  return array
    .map(
      (ar) => `
        <li class="swiper-slide catalog__itemSwip">
            <a href="./list_info.html" class="catalog__linkSwip data-list">
                <img class="catalog__imgSwip"
                  src="${ar.image}" 
                  alt="${ar.name}" 
                  loading="lazy"
                />
              <div class="catalog__containarElSwip">
                <div>
                  <h3 class="catalog__titleSecondarySwip">${ar.name}</h3>
                  <p class="catalog__priceSwip">${ar.price}</p>
                </div>
                <button class="catalog__btnCartSwip">
				          <svg class="catalog__iconCartSwip">
				              <use href="../img/svg/symbol-defs.svg#cart"></use>
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
        slidesPerView: 2,
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
