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
