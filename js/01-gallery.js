import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

addGalleryItemsToHtml(createGalleryItems(galleryItems));

function createGalleryItems(items) {
  return items.map((item) => {
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
}

function addGalleryItemsToHtml(items) {
galleryContainer.innerHTML = items;

}

galleryContainer.onclick = (e) => {
  if (e.target.nodeName === "IMG") {
    const galleryImage = basicLightbox.create(`
		<img width="800" height="600" src="${e.target.dataset.source}">
	`)
    galleryImage.show();

    onClickEscapeBtnCloseImg(galleryImage);
  }
  return false;
}

function onClickEscapeBtnCloseImg(img) {
if (img.visible()) {
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
          img.close();
        }
      })
    }
}

