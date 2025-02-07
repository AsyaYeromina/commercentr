const swiperServices = initializeSwiper('.swiper-services', {
  slidesPerView: 1.25,
  spaceBetween: 32,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1440: {
      grid: { rows: 2, fill: 'column' },
      slidesPerView: 3,
    }
  }
});

const swiperProjects = initializeSwiper('.swiper-projects', {
  slidesPerView: 1.3,
  spaceBetween: 32,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1440: {
      grid: { rows: 2, fill: 'column' },
      slidesPerView: 3,
    }
  }
});

const swiperTeam = initializeSwiper('.swiper-team', {
  slidesPerView: 1.25,
  spaceBetween: 32,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1440: {
      slidesPerView: 4,
    }
  }
});


function initializeSwiper(selector, config) {
  return new Swiper(selector, {
    grid: config.grid || { rows: 1, fill: 'row' },
    slidesPerView: config.slidesPerView || 1,
    spaceBetween: config.spaceBetween || 0,
    breakpoints: config.breakpoints,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    simulateTouch: config.simulateTouch !== undefined ? config.simulateTouch : true,
    grabCursor: config.grabCursor !== undefined ? config.grabCursor : true,
    keyboard: {
      enabled: config.keyboard?.enabled || true,
      onlyInViewport: config.keyboard?.onlyInViewport || true,
    },
    speed: config.speed || 800,
  });
}
