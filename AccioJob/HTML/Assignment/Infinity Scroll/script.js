import APIkey from "./config.js";

const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (input.value) getPhotos();
  else alert("Blank Input");
});

let photosArray = [];
let imagesLoaded;
let totalImages;
let ready = false;

async function getPhotos() {
  const query = input.value;
  const count = 20;
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`;
  console.log("suman");
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    displayPhotos();
    console.log("midya");
  } catch (error) {
    console.log(error);
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageloaded);
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function imageloaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
