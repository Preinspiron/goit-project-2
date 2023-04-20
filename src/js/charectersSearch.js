import refs from '.refs';
import HBS from '../hbs/yers.hbs';
import Marvel from '../js/fetchMarvel';

// import flatpickr from "flatpickr";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MarvelApi } from './marvel-api';

const elements = {
  form: document.querySelector('.js-serch-form'),
  gallery: document.querySelector('.js-gallery'),
  tuiPagination: document.querySelector('.js-tui-pagination'),
};

// let totalPages = null;

// const optionsPagination = {
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 10,
//   page: 1,
// };

// const pagination = new Pagination(elements.tuiPagination, optionsPagination);
// pagination.on('beforeMove', loadMore);

const marvelApi = new MarvelApi();
renderStartPage();

async function renderStartPage() {
  const data = await marvelApi.getCharacters((limit = 20));
  console.log(data);
}

// elements.form.addEventListener('submit', onSerchImages);

// async function onSerchImages(event) {
//   event.preventDefault();

//   elements.tuiPagination.classList.add('is-hidden');
//   elements.gallery.innerHTML = '';

//   const { elements: { searchQuery } } = event.currentTarget;
//   pixabayApi.searchQuery = searchQuery.value;

//   try {
//     const { data: { hits: photoCards, totalHits } } = await pixabayApi.getPhotoCards();

//     totalPages = Math.floor(totalHits / pixabayApi.per_page);

//     if (totalHits === 0 || photoCards.length === 0) {
//       Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//       pagination.reset(0);
//       return;
//     }

//     elements.gallery.insertAdjacentHTML('beforeend', renderPhotoCards(photoCards));
//     Notify.success(`Hooray! We found ${totalHits} images.`);

//     lightbox.refresh();

//     if (totalPages > 1) {
//       elements.tuiPagination.classList.remove('is-hidden');

//       pagination.reset(totalHits);

//     }

//   } catch (error) {
//     console.log(error);
//   }

// }

// async function loadMore(event) {
//   pixabayApi.page = event.page

//   try {
//     const { data: { hits: photoCards } } = await pixabayApi.getPhotoCards();

//     elements.gallery.innerHTML = renderPhotoCards(photoCards);

//     lightbox.refresh();

//   } catch(error) {
//     console.log(error.message);
//   }
// }
