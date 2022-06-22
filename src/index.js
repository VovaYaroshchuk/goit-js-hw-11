const inputEL = document.querySelector('input[name="searchQuery"]');
const searchBtn = document.querySelector('button[type="submit"]');
const gallery = document.querySelector('.gallery');




searchBtn.addEventListener('click', searchImages);

function searchImages (e) {
  e.preventDefault();

  const searchQuery = inputEL.value;
const BASIC_URL = 'https://pixabay.com/api/'

const searchParams = new URLSearchParams({
    key: "28211530-9aacd352b3f11c956fdc5a9f9",
    q: searchQuery,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

const url = `${BASIC_URL}?${searchParams}`;
 function fetchImages(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => renderImagesList(data.hits))
        .catch(error => console.log(error));
}
fetchImages(url);
}
  
  function renderImagesList(images) {
    const markup = images
      .map((image) => {
        return `<div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes ${image.likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${image.views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${image.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${image.downloads}</b>
          </p>
        </div>
      </div>`;
      })
      .join("");
      gallery.innerHTML = markup;
  }