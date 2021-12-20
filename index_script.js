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

  let leftArrowFirst = document.querySelector(".what-we-do-slider-block .arrow_left");
  let rightArrowFirst = document.querySelector(".what-we-do-slider-block .arrow_right");

  $(".what-we-do-slider").slick({
    prevArrow: leftArrowFirst,
    nextArrow: rightArrowFirst
  });

  let currentBathhouseScreenshot = document.querySelector(".current-bathhouse-screenshot");
  currentBathhouseScreenshot.innerHTML = "1/" + $(".what-we-do-slider").slick("getSlick").slideCount;

  $(".what-we-do-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentBathhouseScreenshot.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });

  let leftArrowSecond = document.querySelector(".how-we-build-slider-block .arrow_left");
  let rightArrowSecond = document.querySelector(".how-we-build-slider-block .arrow_right");

  $(".how-we-build-slider").slick({
    prevArrow: leftArrowSecond,
    nextArrow: rightArrowSecond
  });

  let currentManufacturingScreenshot = document.querySelector(".current-manufacturing-screenshot");
  currentManufacturingScreenshot.innerHTML = "1/" + $(".how-we-build-slider").slick("getSlick").slideCount;

  $(".how-we-build-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentManufacturingScreenshot.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });

  let leftArrowThird = document.querySelector(".last-articles-slider-block .arrow_left");
  let rightArrowThird = document.querySelector(".last-articles-slider-block .arrow_right");

  $(".last-articles-slider").slick({
    slidesToShow: 3,
    prevArrow: leftArrowThird,
    nextArrow: rightArrowThird,
    responsive: [
      {
        breakpoint: 1481,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  let currentArticle = document.querySelector(".current-article");
  currentArticle.innerHTML = "1/" + $(".last-articles-slider").slick("getSlick").slideCount;

  $(".last-articles-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentArticle.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });

  let leftArrowFour = document.querySelector(".ceo-slider-block .arrow_left");
  let rightArrowFour = document.querySelector(".ceo-slider-block .arrow_right");

  $(".ceo-slider").slick({
    prevArrow: leftArrowFour,
    nextArrow: rightArrowFour
  });

  let currentHouseScreenshot = document.querySelector(".current-house-screenshot");
  currentHouseScreenshot.innerHTML = "1/" + $(".ceo-slider").slick("getSlick").slideCount;

  $(".ceo-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentHouseScreenshot.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });
  
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navigationTop = document.querySelector(".header-content-bottom-row .navigation");
  
  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navigationTop.classList.toggle("active");
  });
});