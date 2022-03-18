$(function () {
    var interleaveOffset = 0.5; //视差比值
    var mySwiper = new Swiper(".banner_warp", {
        speed: 1200,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        on: { // 事件
            init:function () {
                $('.banner_warp .swiper-slide .each').removeClass('each_active')
                $('.banner_warp .swiper-slide-active .each').addClass('each_active')
            },
            slideChange:function () {
                setTimeout(()=>{
                    $('.banner_warp .swiper-slide .each').removeClass('each_active');
                    $('.banner_warp .swiper-slide-active .each').addClass('each_active')
                },1000)
            },
            progress: function(swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function(swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(swiper, speed) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        },
    });
    var mySwiper2 = new Swiper ('.works_warp', {
        speed: 1000,
        spaceBetween: 80,
        initialSlide: 2,
    })
    var mySwiper3 = new Swiper ('.works_line', {
        speed: 1000,
        spaceBetween: 80,
        slidesPerView: 6,
        initialSlide: 2,
        slideToClickedSlide: true,
        centeredSlides : true,
    })
    mySwiper2.controller.control = mySwiper3;
    mySwiper3.controller.control = mySwiper2;
})