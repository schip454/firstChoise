// new WOW({
//   mobile: false,
// }).init();

window.addEventListener("DOMContentLoaded", function () {
  new WOW({
    mobile: false,
  }).init();

  const hiddenContent = document.querySelectorAll(".loading");
  hiddenContent.forEach(function (element) {
    element.classList.remove("loading");
  });
});

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

const swiper = new Swiper(".top__slider", {
  loop: true,
  effect: "fade",

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
  slidesPerView: 1,

  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    1025: {
      allowTouchMove: false,
    },
  },
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
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
  speed: 500,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },
  breakpoints: {
    320: {
      pagination: {
        clickable: true,
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
        item.classList.add("fadeInUp");

        item.style.display = "flex";
        value.remove();
        item.dataset.card = "open";
      }
    });
  });
});

// function initMap() {
//   const map = new google.maps.Map(document.querySelector(".map__content"), {
//     zoom: 9.8,
//     center: { lat: 42.30131361665214, lng: -83.26433857597175 },
//   });
//   let infoPopup;

//   // данные маркера
//   const markers = [
//     {
//       coordinates: { lat: 42.30131361665214, lng: -83.26433857597175 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">DEARBORN WEST</h5>
//         <p class="map__popup-adress">
//           23455 MICHIGAN AVE DEARBORN, MI 48124
//         </p>
//         <a href="tel:3134386094" class="map__popup-number"
//           >(313) 438-6094</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
//           <div class="map__popup-time">
//             9AM–5PM<span>Holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       coordinates: { lat: 42.368829865751955, lng: -83.33192302994873 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">LIVONIA</h5>
//         <p class="map__popup-adress">
//         11502 MIDDLEBELT ROAD LIVONIA, MI 48150
//         </p>
//         <a href="tel:7347620739" class="map__popup-number"
//           >(734) 762-0739</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
//           <div class="map__popup-time">
//             9AM–5PM<span>Holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       coordinates: { lat: 42.23250083684662, lng: -83.26826548762394 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">TAYLOR</h5>
//         <p class="map__popup-adress">
//          10155 TELEGRAPH RD TAYLOR, MI 48180
//         </p>
//         <a href="tel:7347181969" class="map__popup-number"
//           >(734) 718-1969</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           CLOSED<span>Saturday–Sunday </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       coordinates: { lat: 42.32937404396069, lng: -83.16846993179551 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">DEARBORN EAST</h5>
//         <p class="map__popup-adress">
//            12841 FORD RD DEARBORN, MI 48126
//         </p>
//         <a href="tel:3137104199" class="map__popup-number"
//           >(313) 710-4199</a
//         >
//         </div>
//         <p class="map__popup-work">24HRS A DAY <br> 365 DAYS A YEAR</p>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       // name: "BLOOMFIELD",
//       coordinates: { lat: 42.605625499956275, lng: -83.29637560295008 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">BLOOMFIELD</h5>
//         <p class="map__popup-adress">
//         274 S TELEGRAPH ROAD BLOOMFIELD, MI 48302
//         </p>
//         <a href="tel:2484510933" class="map__popup-number"
//           >(248) 451-0933</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       // name: "SOUTHFIELD",
//       coordinates: { lat: 42.507171246549284, lng: -83.22193751644866 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">SOUTHFIELD</h5>
//         <p class="map__popup-adress">
//           29628 SOUTHFIELD ROAD SOUTHFIELD, MI 48076
//         </p>
//         <a href="tel:2486219040" class="map__popup-number"
//           >(248) 621-9040</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       // name: "GARDEN CITY",
//       coordinates: { lat: 42.325582511048424, lng: -83.3512507587854 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">GARDEN CITY</h5>
//         <p class="map__popup-adress">
//            31450 FORD RD GARDEN CITY, MI 48135
//         </p>
//         <a href="tel:7342681333" class="map__popup-number"
//           >(734) 268-1333</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//   ];

//   // добавление маркера на страницу
//   for (let i = 0; i < markers.length; i++) {
//     addMarker(markers[i]);
//   }

//   // функция обьявления маркера
//   function addMarker(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       document.querySelectorAll(".map__item").forEach((item) => {
//         item.addEventListener("click", (e) => {
//           // placeMarkerAndPanTo(e.latLng, map);
//           // infoPopup.setContent(properties.info);
//           // map.panTo(properties.coordinates);
//           infoPopup.setContent(properties.info);
//           infoPopup.open(map, marker);
//         });
//       });
//     }
//   }

//   markers.forEach(addMarker);
// }

// window.initMap = initMap;

//  1                                     2113212312

// function initMap() {
//   const map = new google.maps.Map(document.querySelector(".map__content"), {
//     zoom: 9.8,
//     center: { lat: 42.30131361665214, lng: -83.26433857597175 },
//   });
//   let infoPopup;

//   // данные маркера
//   const markers = [
//     {
//       name: "DEARBORN WEST",
//       coordinates: { lat: 42.30131361665214, lng: -83.26433857597175 },
//       info: `
//       <div class="map__popup map__popup--1">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">DEARBORN WEST</h5>
//         <p class="map__popup-adress">
//           23455 MICHIGAN AVE DEARBORN, MI 48124
//         </p>
//         <a href="tel:3134386094" class="map__popup-number"
//           >(313) 438-6094</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
//           <div class="map__popup-time">
//             9AM–5PM<span>Holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "LIVONIA",
//       coordinates: { lat: 42.368829865751955, lng: -83.33192302994873 },
//       info: `
//       <div class="map__popup map__popup--2">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">LIVONIA</h5>
//         <p class="map__popup-adress">
//         11502 MIDDLEBELT ROAD LIVONIA, MI 48150
//         </p>
//         <a href="tel:7347620739" class="map__popup-number"
//           >(734) 762-0739</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
//           <div class="map__popup-time">
//             9AM–5PM<span>Holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "TAYLOR",
//       coordinates: { lat: 42.23250083684662, lng: -83.26826548762394 },
//       info: `
//       <div class="map__popup map__popup--3">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">TAYLOR</h5>
//         <p class="map__popup-adress">
//          10155 TELEGRAPH RD TAYLOR, MI 48180
//         </p>
//         <a href="tel:7347181969" class="map__popup-number"
//           >(734) 718-1969</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           CLOSED<span>Saturday–Sunday </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "DEARBORN EAST",
//       coordinates: { lat: 42.32937404396069, lng: -83.16846993179551 },
//       info: `
//       <div class="map__popup map__popup--4">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">DEARBORN EAST</h5>
//         <p class="map__popup-adress">
//            12841 FORD RD DEARBORN, MI 48126
//         </p>
//         <a href="tel:3137104199" class="map__popup-number"
//           >(313) 710-4199</a
//         >
//         </div>
//         <p class="map__popup-work">24HRS A DAY <br> 365 DAYS A YEAR</p>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "BLOOMFIELD",
//       coordinates: { lat: 42.605625499956275, lng: -83.29637560295008 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">BLOOMFIELD</h5>
//         <p class="map__popup-adress">
//         274 S TELEGRAPH ROAD BLOOMFIELD, MI 48302
//         </p>
//         <a href="tel:2484510933" class="map__popup-number"
//           >(248) 451-0933</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "SOUTHFIELD",
//       coordinates: { lat: 42.507171246549284, lng: -83.22193751644866 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">SOUTHFIELD</h5>
//         <p class="map__popup-adress">
//           29628 SOUTHFIELD ROAD SOUTHFIELD, MI 48076
//         </p>
//         <a href="tel:2486219040" class="map__popup-number"
//           >(248) 621-9040</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//     {
//       name: "GARDEN CITY",
//       coordinates: { lat: 42.325582511048424, lng: -83.3512507587854 },
//       info: `
//       <div class="map__popup">
//       <div class="map__popup-inner">
//         <h5 class="map__popup-title">GARDEN CITY</h5>
//         <p class="map__popup-adress">
//            31450 FORD RD GARDEN CITY, MI 48135
//         </p>
//         <a href="tel:7342681333" class="map__popup-number"
//           >(734) 268-1333</a
//         >
//         </div>
//         <div class="map__popup-worktime">
//           <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
//           <div class="map__popup-time">
//           9AM–5PM<span>Weekends and holidays </span>
//           </div>
//         </div>
//         <button class="map__item-btn map__popup-btn">Save my spot</button>
//       </div>
//       `,
//       image: "../images/pin.svg",
//       activeImage: "../images/redpin.svg",
//     },
//   ];

//   // let item = document.querySelector(".map__item--1");
//   // добавление маркера на страницу
//   // for (let i = 0; i < markers.length; i++) {
//   // addMarker(markers[i]);
//   // }
//   addMarker(markers[0]);
//   addMarker2(markers[1]);
//   addMarker3(markers[2]);
//   addMarker4(markers[3]);
//   addMarker5(markers[4]);
//   addMarker6(markers[5]);
//   addMarker7(markers[6]);
//   console.log(markers[1]);

//   // функция обьявления маркера
//   function addMarker(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });
//     marker.setIcon(properties.image);

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--1");

//       item.addEventListener("click", (e) => {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       // item.addListener(marker, "click", () => {
//       //   infoPopup.setContent(properties.info);
//       //   marker.setIcon(properties.activeImage);
//       //   infoPopup.open(map, marker);
//       // });
//       // const qwe = document.querySelectorAll(".map__item");
//       // qwe.addEventListener("click", () => {});

//       // const qwe = document.querySelectorAll(".map__item");
//       // qwe.addEventListener("click", function () {
//       //   infoPopup.close();
//       //   infoPopup.setContent(properties.info);
//       //   // marker.setIcon(properties.activeImage);
//       //   infoPopup.open(map);
//       // });
//     }
//   }
//   function addMarker2(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--2");

//       item.addEventListener("click", (e) => {
//         marker.setIcon(properties.image);
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
//   function addMarker3(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--3");

//       item.addEventListener("click", (e) => {
//         marker.setIcon(properties.image);
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
//   function addMarker4(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--4");

//       item.addEventListener("click", (e) => {
//         marker.setIcon(properties.image);
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
//   function addMarker5(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--5");

//       item.addEventListener("click", (e) => {
//         marker.setIcon(properties.image);
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
//   function addMarker6(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--6");

//       item.addEventListener("click", (e) => {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
//   function addMarker7(properties) {
//     const marker = new google.maps.Marker({
//       position: properties.coordinates,
//       map,
//       icon: properties.image,
//       title: properties.name,
//     });

//     if (properties.info) {
//       if (infoPopup) {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       }

//       infoPopup = new google.maps.InfoWindow();

//       // console.log(marker.getTitle());

//       const item = document.querySelector(".map__item--7");

//       item.addEventListener("click", (e) => {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });

//       google.maps.event.addListener(marker, "click", function () {
//         infoPopup.setContent(properties.info);
//         marker.setIcon(properties.activeImage);
//         infoPopup.open(map, marker);
//       });
//       map.addListener("click", () => {
//         infoPopup.close();
//         marker.setIcon(properties.image);
//       });

//       marker.setIcon(properties.image);
//     }
//   }
// }

// window.initMap = initMap;
