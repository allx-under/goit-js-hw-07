import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const galleryItemsEl = galleryItems.map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" rel="noopener noreferrer" target="_blank">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join("");

galleryContainer.innerHTML = galleryItemsEl;

// galleryContainer.addEventListener('click', e => {
//     if (e.target.dataset.source) {
//       const instance = basicLightbox.create(`
//     <img src="${e.target.href}" width="800" height="600">
// `)
//         instance.show()
//     }
// })

const imageEl = document.querySelector(".gallery__link")

imageEl.addEventListener("click", (e) => console.log(e.target))