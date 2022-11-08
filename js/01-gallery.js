import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const pictureCollection = document.querySelectorAll('.gallery__image');

function createGalleryElement({ preview, original, description } = {}) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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

  const instance = basicLightbox.create(`
    <img
      class="modal__image"
      src="${event.target.dataset.source}"
      data-source=""
      alt=""
    />
`);
  instance.show();
}

galleryEl.addEventListener('click', onShowOriginalPicClick);
