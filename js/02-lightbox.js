import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

addGalleryItemsToHtml(createGalleryItems(galleryItems));

function createGalleryItems (items) {
  const galleryItemsEl = items.map((item) => {
    return `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
  }).join("");
  
  return galleryItemsEl;
}

function addGalleryItemsToHtml(items) {
  galleryContainer.innerHTML = items;
}
const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
})