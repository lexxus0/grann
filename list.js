import"./assets/header-BZCa_rHH.js";import{a as n,i,S as o}from"./assets/vendor-CK6Z_Hq3.js";n.defaults.baseURL="https://66f82af52a683ce9730ed951.mockapi.io";async function c(){try{const e=await n.get("/Products");if(e.data.length===0){i.error({message:"Oops...Something went wrong!",position:"bottomRight"});return}return e.data}catch{i.error({message:"Oops...Something went wrong!",position:"bottomRight"})}}const g=document.querySelector('[data-action="catalog"]');document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("catalogOpened")==="true"&&d()});async function d(){const e=await c(),t=localStorage.getItem("selectedMenu"),r=t?e.filter(l=>l.category===t):e;p(Promise.resolve(r))}async function p(e){const t=await e;u(w,t),f()}function w(e){return e.map(t=>`
        <li class="swiper-slide catalog__itemSwip">
            <a href="./list_info.html" class="catalog__linkSwip data-list">
                <img class="catalog__imgSwip"
                  src="${t.image}" 
                  alt="${t.name}" 
                  loading="lazy"
                />
              <div class="catalog__containarElSwip">
                <div>
                  <h3 class="catalog__titleSecondarySwip">${t.name}</h3>
                  <p class="catalog__priceSwip">${t.price}</p>
                </div>
                <button class="catalog__btnCartSwip">
				          <svg class="catalog__iconCartSwip">
				              <use href="../img/svg/symbol-defs.svg#cart"></use>
				          </svg>
			          </button>
              </div>
            </a>
        </li>`).join("")}function u(e,t){g.insertAdjacentHTML("beforeend",e(t))}function f(){new o(".catalog__swiper",{keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".catalog__swipBtn--next",prevEl:".catalog__swipBtn--prev"},breakpoints:{0:{slidesPerView:2,spaceBetween:20,grid:{rows:5}},768:{slidesPerView:3,spaceBetween:20,grid:{rows:5}},1024:{slidesPerView:3,spaceBetween:30,grid:{rows:5}}},pagination:{el:".catalog__pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}}})}let a;function s(){window.innerWidth<=480?a||(a=new o(".btn__swiper",{slidesPerView:2,spaceBetween:32})):a&&(a.destroy(!0,!0),a=void 0)}s();window.addEventListener("resize",s);
//# sourceMappingURL=list.js.map