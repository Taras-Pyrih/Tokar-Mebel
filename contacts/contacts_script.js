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
  
  let map = document.querySelector(".map");
  let iframe = document.querySelector(".map iframe");
  
  map.style.width = "100%";

  if (document.body.offsetWidth > 1150) {
    map.style.height = "800px";
  }
  else if (document.body.offsetWidth <= 1150 && document.body.offsetWidth > 750) {
    map.style.height = "700px";
  }
  else if (document.body.offsetWidth <= 750 && document.body.offsetWidth > 610) {
    map.style.height = "600px";
  }
  else if (document.body.offsetWidth <= 610 && document.body.offsetWidth > 450) {
    map.style.height = "500px";
  }
  else {
    map.style.height = "400px";
  }
  
  iframe.style.width = "100%";
  iframe.style.height = "100%";

  let leftArrowFirst = document.querySelector(".last-articles-slider-block .arrow_left");
  let rightArrowFirst = document.querySelector(".last-articles-slider-block .arrow_right");

  $(".last-articles-slider").slick({
    slidesToShow: 3,
    prevArrow: leftArrowFirst,
    nextArrow: rightArrowFirst,
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