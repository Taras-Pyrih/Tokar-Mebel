$(document).ready(function() {
  let languageSelection = document.querySelector(".language-selection");
  let languageList = document.querySelector(".language-list");
  let dropdownListArrowOneImg = document.querySelector(".dropdown-list-arrow-one img");

  languageSelection.addEventListener("click", function () {
    languageList.classList.toggle("open");
    dropdownListArrowOneImg.classList.toggle("active");
  });

  let languageListItems = document.querySelectorAll(".language-list__item");
  
  for (let i = 0; i < languageListItems.length; i++) {
    languageListItems[i].addEventListener("click", function () {
      let selectedLanguage = this.cloneNode(true);
      languageSelection.firstElementChild.replaceWith(selectedLanguage);
    });
  }

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
    asNavFor: ".barcelona-variant-slider-for",
    responsive: [
      {
        breakpoint: 611,
        settings: "unslick"
      }
    ]
  });

  let leftHorizontalSlickList = document.querySelector('.barcelona-variant-slider-for .slick-list');
  let barcelonaVariantSliderNav = document.querySelector('.barcelona-variant-slider-nav');
 
  barcelonaVariantSliderNav.style.height = `${leftHorizontalSlickList.offsetHeight}px`;

  let currentRightImage = document.querySelector(".barcelona-variant-slider-nav .slick-current.slick-active");
  let difference = (leftHorizontalSlickList.offsetHeight - currentRightImage.offsetHeight * 4) / 4;
  let rightImages = document.querySelectorAll(".barcelona-variant-slider-nav img");

  for (let j = 0; j < rightImages.length; j++) {
    rightImages[j].style.marginBottom = `${difference + 1}px`
  }

  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navigationTop = document.querySelector(".header-content-bottom-row .navigation");
  
  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navigationTop.classList.toggle("active");
  });
});