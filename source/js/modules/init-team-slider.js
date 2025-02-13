/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в секции Команда -- Начало --
// Team slider -- Start --

const initTeamSlider = () => {
  const swiper03 = new Swiper('.swiper--03', {
    watchOverflow: true,
    speed: 800,
    slidesPerView: 1.5,
    spaceBetween: 10,
    lazy: true,
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
        initialSlide: 1,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.team__slider-btn--next',
      prevEl: '.team__slider-btn--prev',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    // },
  });
};

export {initTeamSlider};
// Слайдер в секции Команда -- Конец --
// Team slider -- End --
