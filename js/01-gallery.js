import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

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

  const instance = basicLightbox.create(
    `
    <img
      class="modal__image"
      src="${event.target.dataset.source}"
      data-source=""
      alt=""
    />
`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onEscKeyDown);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onEscKeyDown);
      },
    }
  );

  instance.show();

  function onEscKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

galleryEl.addEventListener('click', onShowOriginalPicClick);
