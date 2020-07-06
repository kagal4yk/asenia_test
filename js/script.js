$(document).ready(function() {
    $('.header__slider').slick({
        arrows: false,
        dots: true
    });

    $('.content__reviews-slider').slick({
        arrows: true
    });

    $("a[href*='#']").mPageScroll2id();

});