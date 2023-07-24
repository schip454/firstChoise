// if (window.innerHeight >= 1200) {
const myText = new SplitType(".top__title");
gsap.to(".word", {
  stagger: 0.12,
  delay: 0.2,
  duration: 1.3,

  keyframes: {
    "0%": { opacity: 0, duration: 0.3 },
    "100%": { opacity: 1 },
  },
  // ease:Linear.easeNone
});
const mySecondText = new SplitType(".care__title");
gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,

  keyframes: {
    "0%": { opacity: 0, duration: 0.3 },
    "100%": { opacity: 1 },
  },
  // ease:Linear.easeNone
});

const myThirdText = new SplitType(".health__title");
gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,

  keyframes: {
    "0%": { opacity: 0, duration: 0.3 },
    "100%": { opacity: 1 },
  },
  // ease:Linear.easeNone
});
const myFourText = new SplitType(".about__title");
gsap.to(".word", {
  stagger: 0.12,
  duration: 1.3,

  keyframes: {
    "0%": { opacity: 0, duration: 0.3 },
    "100%": { opacity: 1 },
  },
  // ease:Linear.easeNone
});
// }
