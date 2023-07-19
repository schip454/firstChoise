const videoItem = document.querySelector(".video__item");
const videoItemSecond = document.querySelector(".video__item--second");
const videoContainer = document.querySelector(".video__box");
const videoContainerSecond = document.querySelector(".video__box--second");
if (window.innerWidth <= 960) {
  videoContainer.appendChild(videoItem);
  videoContainerSecond.appendChild(videoItemSecond);
}
