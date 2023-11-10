var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    initialSlide: 2,
});

document.addEventListener("wheel", function (event) {
    event.preventDefault();

    var delta = event.deltaY || event.detail || (-event.wheelDelta);

    // 定義一個速度係數，控制滾動速度
    var scrollSpeed = 0.5;

    // 根據滾動方向和速度係數調整滾動位移
    var scrollAmount = delta * scrollSpeed;

    // 移動 slide
    swiper.slideTo(swiper.activeIndex + Math.sign(scrollAmount));
});
