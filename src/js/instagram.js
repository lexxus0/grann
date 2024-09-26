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
        el: ".swiper-pagination.insta__swiperPagination",
        clickable: true,
    },
        on: {
        init: function () {
            console.log('Swiper initialized');
            console.log('Next button element:', document.querySelector('.insta__swipBtn--next'));
            console.log('Prev button element:', document.querySelector('.insta__swipBtn--prev'));
        },
    },
});

