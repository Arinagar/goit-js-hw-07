import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const pictureCollection = document.querySelector('.gallery__image');
const linkCollection = document.querySelector('.gallery__link');

function createGalleryElement({ preview, original, description } = {}) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
}

const galleryElement = galleryItems.map(el => createGalleryElement(el));

galleryEl.insertAdjacentHTML('beforeend', galleryElement.join(''));

function onShowOriginalPicClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  createModal();

  console.dir(event.target);
}

function createModal() {
  const instance = basicLightbox.create(`
    <img src="${linkCollection.href}" width="800" height="600">
`);
  instance.show();
}

galleryEl.addEventListener('click', onShowOriginalPicClick);
