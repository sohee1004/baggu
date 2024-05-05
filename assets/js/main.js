$(function () {
    introSlide = new Swiper('.intro-slide', {
        slidesPerView: 'auto',
        spaceBetween: 20
    });

    commonSlide = new Swiper('.challenge-slide', {
        slidesPerView: 'auto',
        spaceBetween: 27,
    });


    bestSlide = new Swiper(".sc-best .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesPerView: 5.2,
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3
            },
        }
    });


    $('.sc-best .nav-area .tab').click(function (e) {
        e.preventDefault();
        target = $(this).data('target');

        $('.sc-best .nav-area .tab').removeClass('active');
        $(this).addClass('active');
        $(target).addClass('active').siblings('.sc-best .item').removeClass('active');
    });


    newsSlide = new Swiper('.newletter-slide', {
        slidesPerView: 'auto',
        spaceBetween: 33
    });

    $(".sc-best .swiper-slide .link-item .wishlist").on("click", function () {
        $(this).toggleClass('on');
    });


    /* 
        https://nanggi-hl.tistory.com/144
        https://www.happyjung.com/lecture/2768?sfl=wr_subject&stx=%EB%A7%88%EC%9A%B0%EC%8A%A4&sop=and
    */
    $(".sc-newsletter .hover-img").hover(function () {
        $(this).attr("src", $(this).attr("src").replace("_off.png", "_on.png"), 500);
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_on.png", "_off.png"), 500);
    });


}); //end