const swiperServices = initializeSwiper('.swiper-services', {
    grid: {
        rows: 2,
        fill: 'column'
    },
    slidesPerView: 3,
    spaceBetween: 32
});
const swiperProjects = initializeSwiper('.swiper-projects', {
    grid: {
        rows: 2,
        fill: 'column'
    },
    slidesPerView: 2,
    spaceBetween: 32
});
const swiperTeam = initializeSwiper('.swiper-team', {
    // grid: { rows: 1, fill: 'row' },
    slidesPerView: 4,
    spaceBetween: 32
});
function initializeSwiper(selector, config) {
    return new Swiper(selector, {
        grid: config.grid || {
            rows: 1,
            fill: 'row'
        },
        slidesPerView: config.slidesPerView || 1,
        spaceBetween: config.spaceBetween || 0,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        simulateTouch: config.simulateTouch !== undefined ? config.simulateTouch : true,
        grabCursor: config.grabCursor !== undefined ? config.grabCursor : true,
        keyboard: {
            enabled: config.keyboard?.enabled || true,
            onlyInViewport: config.keyboard?.onlyInViewport || true
        },
        speed: config.speed || 800
    });
}

//# sourceMappingURL=index.25139ead.js.map
