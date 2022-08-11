import { galleryItems } from "./gallery-items.js";

// Change code below this line
const refs = {
  galleryEl: document.querySelector(".gallery"),
  itemsEl: document.querySelector(".gallery__image"),
};

let items = galleryItems.map((item) => {
  return ` 
  <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>

`;
});
refs.galleryEl.innerHTML = items.join("");

// открыть модалку
refs.galleryEl.addEventListener("click", onModalClick);

function onModalClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  const bigImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  bigImg.show();
  // закрыть модалку
  function onModalClose(event) {
    if (event.code === "Escape") {
      bigImg.close();
      document.removeEventListener("keydown", onModalClose);
    }
  }
  document.addEventListener("keydown", onModalClose);
}
