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

function initMap() {
  const map = new google.maps.Map(document.querySelector(".map__content"), {
    zoom: 9.8,
    center: { lat: 42.30131361665214, lng: -83.26433857597175 },
  });

  map.addListener("click", onMapClick);

  const infoPopup = new google.maps.InfoWindow();
  infoPopup.addListener("closeclick", resetMarkersIcons);

  const markers = [
    {
      name: "DEARBORN EAST",
      coordinates: { lat: 42.32937404396069, lng: -83.16846993179551 },
      info: `
      <div class="map__popup map__popup--4">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">DEARBORN EAST</h5>
        <p class="map__popup-adress">
           12841 FORD RD DEARBORN, MI 48126
        </p>
        <a href="tel:3137104199" class="map__popup-number"
          >(313) 710-4199</a
        >
        </div>
        <p class="map__popup-work">24HRS A DAY <br> 365 DAYS A YEAR</p>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "12841 FORD RD DEARBORN, MI 48126",
      tel: "(313) 710-4199",
      telForHref: "3137104199",
      workTime: `
      <div class="map__item-box">
          <div class="map__item-work">
          <p>24HRS A DAY</p>
          <p>365 DAYS A YEAR</p>
          </div>
      </div>`,
    },
    {
      name: "DEARBORN WEST",
      coordinates: { lat: 42.30131361665214, lng: -83.26433857597175 },
      info: ` 
      <div class="map__popup map__popup--1">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">DEARBORN WEST</h5>
        <p class="map__popup-adress">
          23455 MICHIGAN AVE DEARBORN, MI 48124
        </p>
        <a href="tel:3134386094" class="map__popup-number"
          >(313) 438-6094</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
          <div class="map__popup-time">
            9AM–5PM<span>Holidays </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "12841 FORD RD DEARBORN, MI 48126",
      tel: "(313) 438-6094",
      telForHref: "3134386094",
      workTime: `
      <div class="map__item-worktime">
        <div class="map__item-time">
          9AM–9PM<span>Mon–Sun </span>
        </div>
        <div class="map__item-time">
          9AM–5PM <span>Holidays </span>
        </div>
     </div>`,
    },
    {
      name: "LIVONIA",
      coordinates: { lat: 42.368829865751955, lng: -83.33192302994873 },
      info: ` 
      <div class="map__popup map__popup--2">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">LIVONIA</h5>
        <p class="map__popup-adress">
        11502 MIDDLEBELT ROAD LIVONIA, MI 48150
        </p>
        <a href="tel:7347620739" class="map__popup-number"
          >(734) 762-0739</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Sun </span></div>
          <div class="map__popup-time">
            9AM–5PM<span>Holidays </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "11502 MIDDLEBELT ROAD LIVONIA, MI 48150",
      tel: "(734) 762-0739",
      telForHref: "7347620739",
      workTime: `
      <div class="map__item-worktime">
        <div class="map__item-time">
          9AM–9PM<span>Mon–Sun </span>
        </div>
        <div class="map__item-time">
          9AM–5PM <span>Holidays </span>
        </div>
     </div>`,
    },
    {
      name: "TAYLOR",
      coordinates: { lat: 42.23250083684662, lng: -83.26826548762394 },
      info: `
      <div class="map__popup map__popup--3">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">TAYLOR</h5>
        <p class="map__popup-adress">
         10155 TELEGRAPH RD TAYLOR, MI 48180
        </p>
        <a href="tel:7347181969" class="map__popup-number"
          >(734) 718-1969</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
          <div class="map__popup-time">
          CLOSED<span>Saturday–Sunday </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "10155 TELEGRAPH RD TAYLOR, MI 48180",
      tel: "(734) 718-1969",
      telForHref: "7347181969",
      workTime: `
      <div class="map__item-worktime">
      <div class="map__item-time">
        9AM–5PM<span>Mon–Fri </span>
      </div>
      <div class="map__item-time">
        CLOSED <span>Saturday–Sunday</span>
      </div>
    </div>`,
    },
    {
      name: "BLOOMFIELD",
      coordinates: { lat: 42.605625499956275, lng: -83.29637560295008 },
      info: `
      <div class="map__popup">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">BLOOMFIELD</h5>
        <p class="map__popup-adress">
        274 S TELEGRAPH ROAD BLOOMFIELD, MI 48302
        </p>
        <a href="tel:2484510933" class="map__popup-number"
          >(248) 451-0933</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
          <div class="map__popup-time">
          9AM–5PM<span>Weekends and holidays </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "2274 S TELEGRAPH ROAD BLOOMFIELD, MI 48302",
      tel: "(248) 451-0933",
      telForHref: "2484510933",
      workTime: `
      <div class="map__item-worktime">
      <div class="map__item-time">
        9AM–9PM<span>Mon–Fri </span>
      </div>
      <div class="map__item-time">
        9AM–5PM <span>Weekends and holidays </span>
      </div>
    </div>`,
    },
    {
      name: "SOUTHFIELD",
      coordinates: { lat: 42.507171246549284, lng: -83.22193751644866 },
      info: `
      <div class="map__popup">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">SOUTHFIELD</h5>
        <p class="map__popup-adress">
          29628 SOUTHFIELD ROAD SOUTHFIELD, MI 48076
        </p>
        <a href="tel:2486219040" class="map__popup-number"
          >(248) 621-9040</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
          <div class="map__popup-time">
          9AM–5PM<span>Weekends and holidays </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "29628 SOUTHFIELD ROAD SOUTHFIELD, MI 48076",
      tel: "2486219040",
      telForHref: "(248) 621-9040",
      workTime: `
      <div class="map__item-worktime">
      <div class="map__item-time">
        9AM–9PM<span>Mon–Fri </span>
      </div>
      <div class="map__item-time">
        9AM–5PM <span>Weekends and Holidays </span>
      </div>
    </div>`,
    },
    {
      name: "GARDEN CITY",
      coordinates: { lat: 42.325582511048424, lng: -83.3512507587854 },
      info: `
      <div class="map__popup">
      <div class="map__popup-inner">
        <h5 class="map__popup-title">GARDEN CITY</h5>
        <p class="map__popup-adress">
           31450 FORD RD GARDEN CITY, MI 48135
        </p>
        <a href="tel:7342681333" class="map__popup-number"
          >(734) 268-1333</a
        >
        </div>
        <div class="map__popup-worktime">
          <div class="map__popup-time">9AM–9PM<span>Mon–Fri </span></div>
          <div class="map__popup-time">
          9AM–5PM<span>Weekends and holidays </span>
          </div>
        </div>
        <button class="map__item-btn map__popup-btn">Save my spot</button>
      </div>
      `,
      image: "../images/pin.svg",
      activeImage: "../images/redpin.svg",
      adress: "31450 FORD RD GARDEN CITY, MI 48135",
      tel: "7342681333",
      telForHref: "(734) 268-1333",
      workTime: `
      <div class="map__item-worktime">
      <div class="map__item-time">
        9AM–9PM<span>Mon–Fri </span>
      </div>
      <div class="map__item-time">
        9AM–5PM <span>Weekends and holidays </span>
      </div>
      </div>`,
    },
  ].map(
    (n) => (
      (n.image = "../images/pin.svg"),
      (n.activeImage = "../images/redpin.svg"),
      n
    )
  );

  markers.forEach((n) => {
    n.marker = new google.maps.Marker({
      position: n.coordinates,
      map,
      icon: n.image,
      title: n.name,
    });

    if (n.info) {
      n.marker.addListener("click", onMarkerClick);
    }
  });

  const controls = document.querySelector("#controls");

  controls.innerHTML = markers
    .map(
      (n, i) => `
    <div class="map__item" data-index="${i}">
    <h5 class="map__item-title">${n.name}</h5>
    <p class="map__item-adress">
      ${n.adress}
    </p>
    <div class="map__item-box">
      ${n.workTime}
      <a href="tel:${n.telForHref}" class="map__item-phone"
        >${n.tel}</a
      >
    </div>
    <button class="map__item-btn">Save my spot</button>
  </div>
    
    `
    )
    .join("");

  controls.addEventListener(
    "click",
    ({
      target: {
        dataset: { index },
      },
    }) => {
      if (index) {
        google.maps.event.trigger(markers[index].marker, "click");
      }
    }
  );

  function onMarkerClick() {
    const data = markers.find((n) => n.marker === this);
    infoPopup.setContent(data.info);
    infoPopup.open(map, this);
    resetMarkersIcons(this);
  }

  function onMapClick() {
    infoPopup.close();
    resetMarkersIcons();
  }

  function resetMarkersIcons(marker) {
    markers.forEach((n) =>
      n.marker.setIcon(marker === n.marker ? n.activeImage : n.image)
    );
  }
}
window.initMap = initMap;
