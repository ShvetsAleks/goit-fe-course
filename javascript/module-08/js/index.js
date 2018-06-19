"use strict";

const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

// Разметка для большой картинки
const fullScreen = document.createElement(`div`);
fullScreen.classList.add(`full-screen`);

const fullImg = document.createElement(`img`);
fullImg.classList.add(`full-img`);
fullImg.setAttribute(`src`, "img/fullview-1.jpeg");
fullImg.setAttribute(`alt`, "alt text 1");

fullScreen.appendChild(fullImg);

//Разметка для маленьких картинок
const smallScreen = document.createElement(`ul`);
smallScreen.classList.add(`small-screen`);

const listImg = createListImg(galleryItems);

smallScreen.append(...listImg);

//Полная галерея
const imgGallery = document.querySelector(`.js-image-gallery`);
imgGallery.append(fullScreen, smallScreen);

//Обработка клика

const gallery = document.querySelector(`.small-screen`);
gallery.addEventListener(`click`, onGalleryClick);

//====Функции============
function onGalleryClick(event) {
  const nodeName = event.target.nodeName;

  if (nodeName !== `IMG`) return;

  const eventTarget = event.target;
  const smallImgData = eventTarget.dataset.fullview;

  const fullImg = document.querySelector(`.full-img`);
  fullImg.removeAttribute(`src`);
  fullImg.setAttribute(`src`, `${smallImgData}`);
}

function createSmallImg({ preview, fullview, alt }) {
  const screenItem = document.createElement(`li`);
  screenItem.classList.add(`screen-item`);

  const smallImg = document.createElement(`img`);
  smallImg.classList.add(`small-img`);
  smallImg.setAttribute(`src`, preview);
  smallImg.setAttribute(`data-fullview`, fullview);
  smallImg.setAttribute(`alt`, alt);

  screenItem.appendChild(smallImg);

  return screenItem;
}

function createListImg(arr) {
  return arr.reduce((acc, el) => acc.concat(createSmallImg(el)), []);
}

