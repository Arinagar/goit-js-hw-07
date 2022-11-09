import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

function createGalleryElement({ preview, original, description } = {}) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const galleryElement = galleryItems.map(el => createGalleryElement(el));
galleryEl.insertAdjacentHTML('beforeend', galleryElement.join(''));

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
