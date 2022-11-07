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
  const replaceSrcAttr = () => {
    pictureCollection.forEach(el => {
      el.src = el.dataset.source;
    });
  };

  const instance = basicLightbox.create(`
    <img src="${pictureCollection[src]}">
`);
  instance.show();
  // createModal();

  console.dir(event.target);
}

// function createModal() {
//   const instance = basicLightbox.create(`
//     <img src="" width="800" height="600">
// `);
//   instance.show();
// }

galleryEl.addEventListener('click', onShowOriginalPicClick);
