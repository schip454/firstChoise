const burger = document.querySelector(".header__hamburger");
const burgerContent = document.querySelector(".header__content");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerContent.classList.toggle("active");
});

// document.querySelector(".menu__list-dropdown").addEventListener("click", () => {
//   if (
//     document.querySelector(".menu__dropdown-content").style.maxHeight == "200px"
//   ) {
//     document.querySelector(".menu__dropdown-content").style.maxHeight = "0";
//   } else {
//     document.querySelector(".menu__dropdown-content").style.maxHeight = "200px";
//   }
// });

const swiper = new Swiper(".top__slider", {
  // Optional parameters
  loop: true,
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".top__slider-next",
    prevEl: ".top__slider-prev",
  },
  breakpoints: {
    320: {
      pagination: {
        el: ".top__slider-pagination",
        type: "bullets",
        clickable: true,
      },
    },

    1025: {
      slidesPerView: 1,
      pagination: {
        el: ".top__slider-pagination",
        type: "fraction",
        // formatFractionCurrent: function (number) {
        //   return "0" + number;
        // },
        // formatFractionTotal: function (number) {
        //   return "0" + number;
        // },

        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            `
            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
             <line y1="0.5" x2="34" y2="0.5" stroke="#202020"/>
            </svg>
            ` +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    },
  },
});

function addZero(num) {
  return num > 9 ? num : "0" + num;
}

const swiperInfo = new Swiper(".top__info-slider", {
  loop: true,
  effect: "fade",
  slidesPerView: 1,
});

swiperInfo.controller.control = swiper;
swiper.controller.control = swiperInfo;

const swiperSecond = new Swiper(".announcements__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  speed: 500,
  pagination: {
    el: ".announcements__slider-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
});

const swiperThird = new Swiper(".offers__slider", {
  // Optional parameters
  navigation: {
    nextEl: ".offers__pagination-next",
    prevEl: ".offers__pagination-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.26,
    },
    641: {
      slidesPerView: 1.4,
    },
    961: {
      slidesPerView: 2.2,
    },
    1201: {
      slidesPerView: 3,
    },
  },
});

const swiperFour = new Swiper(".reviews__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  effect: "creative",
  creativeEffect: {
    prev: {
      opacity: 0,
    },
    next: {
      opacity: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },
  breakpoints: {
    320: {
      pagination: {
        el: ".reviews__slider-pagination",
        type: "bullets",
      },
    },
    1025: {
      pagination: {
        el: ".reviews__slider-pagination",
        type: "fraction",
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            `
        <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line y1="0.5" x2="34" y2="0.5" stroke="#202020"/>
        </svg>
        ` +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    },
  },
});
const swiperFive = new Swiper(".insurance__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".insurance__slider-pagination",
    type: "bullets",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      opacity: 0,
    },
    next: {
      opacity: 0,
    },
  },
});

// accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion__item-title"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const videoItem = document.querySelector(".video__item");
const videoItemSecond = document.querySelector(".video__item--second");
const videoContainer = document.querySelector(".video__box");
const videoContainerSecond = document.querySelector(".video__box--second");
if (window.innerWidth <= 960) {
  videoContainer.appendChild(videoItem);
  videoContainerSecond.appendChild(videoItemSecond);
}

// Показывает контент по клику на кнопку Show more
const buttons = document.querySelectorAll(".services__more-btn");
const hiddenCards = document.querySelectorAll("[data-card]");

buttons.forEach((value) => {
  value.addEventListener("click", (e) => {
    e.preventDefault();
    hiddenCards.forEach((item) => {
      if (item.dataset.card === "hidden") {
        // item.classList.remove("bounceOut");
        item.classList.add("fadeInUp");

        // setTimeout(() => {
        item.style.display = "flex";
        // }, 200);
        // value.textContent = "Скрыть";
        value.remove();
        item.dataset.card = "open";
      }
    });
  });
});

const checkboxItem = document.querySelector(".map__toggle-input");
const checkboxText = document.querySelector(".map__toggle-text");
const mapInner = document.querySelector(".map__inner");
const mapCards = document.querySelector(".map__cards");
const mapCardsWrapper = document.querySelector(".map__cards-wrapper");

checkboxItem.addEventListener("click", () => {
  if (checkboxItem.checked) {
    checkboxText.classList.add("checked");
    mapInner.style.display = "none";
    mapCards.style.display = "flex";
    mapCardsWrapper.style.display = "block";
  } else {
    checkboxText.classList.remove("checked");
    mapInner.style.display = "flex";
    mapCards.style.display = "none";
    mapCardsWrapper.style.display = "none";
  }
});

// const tickerItem = document.querySelectorAll(".brands__item");

// let pagination = document.querySelector(".brands__items");
// let initialX = 0;
// let initialY = 0;
// let moveElem = false;

// let events = {
//   mouse: {
//     down: "mousedown",
//     move: "mousemove",
//     up: "mouseup",
//   },
//   touch: {
//     down: "touchstart",
//     move: "touchmove",
//     up: "touchend",
//   },
// };

// let deviceType = "";

// const isTouchDevice = () => {
//   try {
//     document.createEvent("TouchEvent");
//     deviceType = "touch";
//     return true;
//   } catch (err) {
//     deviceType = "mouse";
//     return false;
//   }
// };
// isTouchDevice();

// pagination.addEventListener(events[deviceType].down, (e) => {
//   e.preventDefault();
//   initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
//   initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//   moveElem = true;
// });

// pagination.addEventListener(events[deviceType].move, (e) => {
//   if (moveElem) {
//     e.preventDefault();
//     let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
//     let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//     pagination.style.left = pagination.offsetLeft - (initialX - newX) + "px";

//     initialX = newX;
//     initialY = newY;
//   }
// });

// pagination.addEventListener(events[deviceType].up, (e) => {
//   moveElem = false;
// });

// pagination.addEventListener("mouseleave", (e) => {
//   moveElem = false;
// });
// pagination.addEventListener(events[deviceType].up, (e) => {
//   moveElem = false;
// });
