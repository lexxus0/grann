import Swiper from "swiper/bundle";

const swiperInsta = new Swiper('.insta-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.insta__swipBtn--right',
        prevEl: '.insta__swipBtn--left',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

