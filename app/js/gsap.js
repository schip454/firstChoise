const myText = new SplitType(".top__title");
const topTitle = document.querySelector(".top__title");

gsap.to(".top__title .word", {
  stagger: 0.12,
  // delay: 0.2,
  duration: 1.3,
  onStart: function () {
    topTitle.querySelectorAll(".word").forEach((word) => {
      word.classList.add("wow");
      word.classList.add("hidden");
      word.dataset.wowDelay = "1.3s";
      // word.dataset.wowDelay = "1.65s";
    });
  },
  keyframes: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});
const mySecondText = new SplitType(".care__title");
const careTitle = document.querySelector(".care__title");
gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,
  onStart: function () {
    careTitle.querySelectorAll(".word").forEach((word) => {
      word.classList.add("wow");
      word.classList.add("hidden");
      word.dataset.wowDelay = "1.7s";
    });
  },
  keyframes: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});

const myThirdText = new SplitType(".health__title");
const healthTitle = document.querySelector(".health__title");
gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,
  onStart: function () {
    healthTitle.querySelectorAll(".word").forEach((word) => {
      word.classList.add("wow");
      word.classList.add("hidden");
      word.dataset.wowDelay = "1.3s";
    });
  },
  keyframes: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});
const myFourText = new SplitType(".about__title");
const aboutTitle = document.querySelector(".about__title");

gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,
  onStart: function () {
    aboutTitle.querySelectorAll(".word").forEach((word) => {
      word.classList.add("wow");
      word.classList.add("hidden");
      word.dataset.wowDelay = "1.3s";
    });
  },
  keyframes: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});

function titleAnimationFunc(selector, wordOrChar = ".word") {
  const splitText = new SplitType(selector);
  const title = document.querySelector(selector);
  title.querySelectorAll(wordOrChar).forEach((word, i) => {
    word.classList.add("wow");
    word.classList.add("hidden");
    word.classList.add("animate__fadeIn");

    word.dataset.wowDuration = `.7s`;
    i++;
    i++;
    word.dataset.wowDelay = `${i}00ms`;
    intersectionObserver.disconnect(document.querySelector(selector));
  });
}
