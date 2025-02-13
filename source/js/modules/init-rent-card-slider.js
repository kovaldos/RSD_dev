/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Слайдер в карточке товара аренды -- Начало --
// Rent card slider -- Start --

const initRentCardSlider = () => {
  let swiper15 = document.querySelector('.swiper--15');
  if (swiper15) {
    swiper15 = new Swiper(swiper15, {
      spaceBetween: 5,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        425: {
          spaceBetween: 10,
        },
      },
    });
  }
  let swiper14 = document.querySelector('.swiper--14');
  if (swiper14) {
    swiper14 = new Swiper(swiper14, {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: swiper15,
      },
      // navigation: {
      //   nextEl: '.rent-about-us__slider-btn--next',
      //   prevEl: '.rent-about-us__slider-btn--prev',
      // },
      // pagination: {
      //   el: '.rent-about-us__slider-pag',
      //   type: 'fraction',
      // },
    });
  }
};

export {initRentCardSlider};
// Слайдер в карточке товара аренды -- Конец --
// Rent card slider -- Finish --
