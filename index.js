import{A as u,S as d}from"./assets/vendor-GQ0e_vYh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();new u(".accordion-container");document.querySelector("[data-gallery]");document.addEventListener("click",m);function m(n){p(n)}function p(n){const i=document.querySelector(".gallery__btn--active");if(!n.target.closest("button")&&i){i.classList.remove("gallery__btn--active");return}n.target.nodeName==="BUTTON"&&(n.target.classList.contains("gallery__btn--active")?n.target.classList.remove("gallery__btn--active"):(i&&i.classList.remove("gallery__btn--active"),n.target.classList.add("gallery__btn--active")))}const o={openMenuButton:document.querySelector(".js-open-menu"),closeMenuButton:document.querySelector(".js-close-menu"),mobileMenu:document.querySelector(".js-mobile-menu")};o.openMenuButton.addEventListener("click",s);function s(){const n=document.querySelector(".js-mobile-menu");n.style.transition="transform 250ms linear",o.openMenuButton.removeEventListener("click",s),o.closeMenuButton.addEventListener("click",l),o.mobileMenu.classList.add("js-is-opened"),o.mobileMenu.classList.remove("js-is-closed")}function l(){o.mobileMenu.classList.add("js-is-closed"),o.mobileMenu.classList.remove("js-is-opened"),o.openMenuButton.addEventListener("click",s),o.openMenuButton.removeEventListener("click",l)}new d(".insta-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".insta__swipBtn--next",prevEl:".insta__swipBtn--prev"},pagination:{el:".swiper-pagination.insta__swiperPagination",clickable:!0},on:{init:function(){console.log("Swiper initialized"),console.log("Next button element:",document.querySelector(".insta__swipBtn--next")),console.log("Prev button element:",document.querySelector(".insta__swipBtn--prev"))}}});
//# sourceMappingURL=index.js.map
