import { fetchImages } from './pixabay-api.js';
import { renderGallery } from './render-functions.js';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.getElementById('search-form');
const gallery = document.getElementById('.gallery');
const loader = document.getElementById('loader');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    currentQuery = form.searchQuery.value.trim();

    if (currentQuery === '') {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!',
        });
        return;
    }

    document.querySelector('.gallery').innerHTML = '';
    currentPage = 1;
    loader.style.display = 'block';

    fetchImages(currentQuery, currentPage)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'Warning',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderGallery(data.hits);
                new SimpleLightbox('.gallery a', {});
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error.message,
            });
        })
        .finally(() => {
            loader.style.display = 'none';
        });
});

