import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const galleryItemsEl = galleryItems.map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
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

// galleryContainer.addEventListener('click', (e) => {
   
//       const instance = basicLightbox.create(`
//     <img src="${e.target.href}" width="800" height="600">
// `)
//         instance.show()
//     }
// )

galleryContainer.onclick = (e) => {
  if (e.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
		<img width="800" height="600" src="${e.target.dataset.source}">
	`)
    instance.show();

    const isModalOpen = instance.visible();

    if (isModalOpen) {
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
          instance.close();
        }
      })
    }
  }
  return false;
}


