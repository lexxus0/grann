import Swiper from "swiper/bundle";

const swiperInsta = new Swiper('.insta-swiper', {
    loop:true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.insta__swipBtn--next',
        prevEl: '.insta__swipBtn--prev',
    },
    pagination: {
        el: ".insta__swiperPagination",
        clickable: true,
    },
});

