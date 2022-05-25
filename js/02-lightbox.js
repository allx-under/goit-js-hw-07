import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const galleryItemsEl = galleryItems.map((item) => {
    return `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
}).join("");

galleryContainer.innerHTML = galleryItemsEl;

const lightbox = new SimpleLightbox('.gallery a', { /* options */ })