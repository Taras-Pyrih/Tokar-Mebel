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

  let leftArrowFirst = document.querySelector(".about-company-slider-block .arrow_left");
  let rightArrowFirst = document.querySelector(".about-company-slider-block .arrow_right");

  $(".about-company-slider").slick({
    prevArrow: leftArrowFirst,
    nextArrow: rightArrowFirst
  });

  let currentBathhouseScreenshot = document.querySelector(".current-bathhouse-screenshot");
  currentBathhouseScreenshot.innerHTML = "1/" + $(".about-company-slider").slick("getSlick").slideCount;

  $(".about-company-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {       
    currentBathhouseScreenshot.innerHTML = `${nextSlide + 1}/${slick.slideCount}`;
  });

  let leftArrowSecond = document.querySelector(".last-articles-slider-block .arrow_left");
  let rightArrowSecond = document.querySelector(".last-articles-slider-block .arrow_right");

  $(".last-articles-slider").slick({
    slidesToShow: 3,
    prevArrow: leftArrowSecond,
    nextArrow: rightArrowSecond,
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
  
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navigationTop = document.querySelector(".header-content-bottom-row .navigation");
  
  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navigationTop.classList.toggle("active");
  });
});