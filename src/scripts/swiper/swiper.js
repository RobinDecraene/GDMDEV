const aboutSwiper01 = new Swiper("#aboutSwiper", {
  direction: 'vertical',
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

const menuSwiper = new Swiper("#menuSwiper", {
  direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

const indexSwiper01 = new Swiper("#indexSwiper1", {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 65,
  mousewheel: true
});

const indexSwiper02 = new Swiper("#indexSwiper2", {
  direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  mousewheel: true
});