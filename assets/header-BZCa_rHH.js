(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o={openMenuButton:document.querySelector(".js-open-menu"),closeMenuButton:document.querySelector(".js-close-menu"),mobileMenu:document.querySelector(".js-mobile-menu"),body:document.body};o.openMenuButton.addEventListener("click",r);function r(){const i=document.querySelector(".js-mobile-menu");i.style.transition="transform 250ms linear",o.openMenuButton.removeEventListener("click",r),o.closeMenuButton.addEventListener("click",u),o.mobileMenu.classList.add("js-is-opened"),o.mobileMenu.classList.remove("js-is-closed"),o.body.classList.add("no-scroll")}function u(){o.mobileMenu.classList.add("js-is-closed"),o.mobileMenu.classList.remove("js-is-opened"),o.openMenuButton.addEventListener("click",r),o.openMenuButton.removeEventListener("click",u),o.body.classList.remove("no-scroll")}
//# sourceMappingURL=header-BZCa_rHH.js.map
