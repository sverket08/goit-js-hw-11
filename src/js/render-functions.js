export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = images.map(image => {
      return `
          <div class="gallery-item">
              <a href="${image.largeImageURL}" class="gallery-link">
                  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
              </a>
              <div class="info">
                  <p>Likes: ${image.likes}</p>
                  <p>Views: ${image.views}</p>
                  <p>Comments: ${image.comments}</p>
                  <p>Downloads: ${image.downloads}</p>
              </div>
          </div>
      `;
  }).join('');
}
