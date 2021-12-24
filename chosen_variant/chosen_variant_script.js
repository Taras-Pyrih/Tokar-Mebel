$(document).ready(function() {
  let leftArrowFirst = document.querySelector(".barcelona-variant-slider-block .arrow_left");
  let rightArrowFirst = document.querySelector(".barcelona-variant-slider-block .arrow_right");

  $(".barcelona-variant-slider-for").slick({
    prevArrow: leftArrowFirst,
    nextArrow: rightArrowFirst,
    speed: 500,
    fade: true,
    asNavFor: ".barcelona-variant-slider-nav"
  });

  let currentBarcelonaScreenshot = document.querySelector(".current-barcelona-screenshot");
  currentBarcelonaScreenshot.innerHTML = "1/" + $(".barcelona-variant-slider-for").slick("getSlick").slideCount;

  $(".barcelona-variant-slider-for").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentBarcelonaScreenshot.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });

  $(".barcelona-variant-slider-nav").slick({
    slidesToShow: 4,
    arrows: false,
    speed: 0,
    vertical: true,
    focusOnSelect: true,
    asNavFor: ".barcelona-variant-slider-for"
  });

  let leftHorizontalSlickList = document.querySelector('.barcelona-variant-slider-for .slick-list');
  let barcelonaVariantSliderNav = document.querySelector('.barcelona-variant-slider-nav');
 
  barcelonaVariantSliderNav.style.height = `${leftHorizontalSlickList.offsetHeight}px`;
});