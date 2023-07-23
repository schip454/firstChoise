new WOW({
  mobile: false,
}).init();

const burger = document.querySelector(".header__hamburger");
const burgerContent = document.querySelector(".header__content");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerContent.classList.toggle("active");
});

const dropdownBtn = document.querySelector(".menu__list-dropdown");
const dropdownBody = document.querySelector(".menu__dropdown-content");
dropdownBtn.addEventListener("click", () => {
  dropdownBtn.classList.toggle("active");
  if (dropdownBtn.classList.contains("active")) {
    dropdownBody.style.maxHeight = "200px";
  } else {
    dropdownBody.style.maxHeight = 0;
  }
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
  slidesPerView: "auto",

  navigation: {
    nextEl: ".offers__pagination-next",
    prevEl: ".offers__pagination-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
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
    1201: {
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

// accordionItemHeaders.forEach((accordionItemHeader) => {
//   accordionItemHeader.addEventListener("click", (event) => {
//     accordionItemHeader.classList.toggle("active");
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if (accordionItemHeader.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     } else {
//       accordionItemBody.style.maxHeight = 0;
//     }
//   });
// });

for (let i = 0; i < accordionItemHeaders.length; i++) {
  accordionItemHeaders[i].addEventListener("click", function () {
    accordionItemHeaders.forEach((item) => {
      item.classList.remove("active");
      const accordionItemBody = item.nextElementSibling;
      accordionItemBody.style.maxHeight = 0;
    });
    this.classList.toggle("active");
    const accordionItemBody = this.nextElementSibling;
    if (this.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
}

accordionItemHeaders.forEach((accordionItemHeader) => {
  const accordionItemBody = accordionItemHeader.nextElementSibling;
  if (accordionItemHeader.classList.contains("active")) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
  } else {
    accordionItemBody.style.maxHeight = 0;
  }
});

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

// let widtLogosWrapper = 0;
// const logosWrapper = document.querySelector(".brands__items-wrapper");
// console.log(logosWrapper.children);
// Array.from(logosWrapper.children).forEach(function (el, index) {
//   widtLogosWrapper += el.offsetWidth;
// });
// widtLogosWrapper = widtLogosWrapper * 4;
// document.querySelector(".brands__items").style.width = widtLogosWrapper + "px";

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
