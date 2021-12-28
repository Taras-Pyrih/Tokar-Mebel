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

  let filters = document.querySelectorAll(".filter");
  let dropdownListArrowTwoImgs = document.querySelectorAll(".filter img");
  let filtersData = document.querySelectorAll(".filter-data");

  for (let j = 0; j < filters.length; j++) {
    filters[j].addEventListener("click", function () {
      dropdownListArrowTwoImgs[j].classList.toggle("active");
      filtersData[j].classList.toggle("open");
    });
  }

  let rangeSliderOne = document.querySelector(".range-slider_one");

  noUiSlider.create(rangeSliderOne,{
    start: [10, 268],
    connect: [false, true, false],
    step: 1,
    tooltips: [
      wNumb({
        decimals: 0,
      }),
      wNumb({
        decimals: 0,
      })
    ],
    behaviour: "tap-drag-unconstrained",
    range: {
      "min": 10,
      "max": 500
    }
  });

  let rangeSliderTwo = document.querySelector(".range-slider_two");

  noUiSlider.create(rangeSliderTwo,{
    start: [100000, 2680000],
    connect: [false, true, false],
    step: 1,
    tooltips: [
      wNumb({
        decimals: 0,
        thousand: " "
      }),
      wNumb({
        decimals: 0,
        thousand: " "
      })
    ],
    behaviour: "tap-drag-unconstrained",
    range: {
      "min": 100000,
      "max": 5000000
    }
  });

  let showMore = document.querySelector(".show-more");
  let spinIcon = document.querySelector(".show-more img");
  let variants = document.querySelector(".variants");

  showMore.addEventListener("click", function () {
    if (spinIcon.className === "pressed-odd") {
      spinIcon.classList.remove("pressed-odd");
      spinIcon.classList.add("pressed-even");
    }
    else  {
      spinIcon.classList.add("pressed-odd");
      spinIcon.classList.remove("pressed-even");
    };

    let variantsClone = variants.cloneNode(true);

    setTimeout(function () {
      variants.after(variantsClone);
    }, 1000);
  });

  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navigationTop = document.querySelector(".header-content-bottom-row .navigation");
  
  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navigationTop.classList.toggle("active");
  });

  let filterIcon = document.querySelector(".filter-menu img");
  let residentialBuildingCatalogFilters = document.querySelector(".residential-building-catalog-content-bottom-row__left-side");
  let crossSign = document.querySelector(".cross-sign");

  filterIcon.addEventListener("click", function () {
    residentialBuildingCatalogFilters.classList.add("active");
    crossSign.classList.add("active");
  });

  crossSign.addEventListener("click", function () {
    residentialBuildingCatalogFilters.classList.remove("active");
    crossSign.classList.remove("active");
  });
});