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
