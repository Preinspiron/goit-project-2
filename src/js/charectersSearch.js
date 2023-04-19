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

//! от Алины привет из парщ
{
  export {};
  /* <script>
  import hbs from '../hbs/years.hbs';
  // !!!
  const selectEl = document.querySelector('.pseudoselect');
  const listItemsEl = document.querySelector('.characters-options-list');
  const btnFormatEl = document.querySelector('.js-click-format');
  let opened = false;
  // =====================================
  btnFormatEl.addEventListener('click', e => {
    e.preventDefault();
    onBtnFormatElClick();
  });
  selectEl.addEventListener('click', onBtnFormatElClick);
  // ======================================
  function onBtnFormatElClick(e) {
    if (opened === false) {
      selectEl.style.backgroundColor = '#34387F';
      listItemsEl.style.visibility = 'visible';
      listItemsEl.addEventListener('click', e => {
        selectEl.innerHTML = `${e.target.textContent}`;
        listItemsEl.style.visibility = '';
        selectEl.style.backgroundColor = '#171717';
        opened = !opened;
      });
    } else {
      selectEl.style.backgroundColor = '#171717';
      listItemsEl.style.visibility = '';
    }
    opened = !opened;
  }
</script>

<!-- �仍� ��仍���舒 仗仂 title -->
<script>
  const selectTitleEl = document.querySelector('.pseudoselect-title');
  const listItemsElem = document.querySelector('.title-list');
  const btnOrderByEl = document.querySelector('.js-click-order-by');
  let open = false;
  // ==========================================
  btnOrderByEl.addEventListener('click', e => {
    e.preventDefault();
    onBtnOrderByElClick();
  });
  selectTitleEl.addEventListener('click', onBtnOrderByElClick);
  // =========================================
  function onBtnOrderByElClick() {
    if (open === false) {
      selectTitleEl.style.backgroundColor = '#34387F';
      listItemsElem.style.visibility = 'visible';
      listItemsElem.addEventListener('click', e => {
        selectTitleEl.innerHTML = `${e.target.textContent}`;
        listItemsElem.style.visibility = '';
        selectTitleEl.style.backgroundColor = '#171717';
        open = !open;
      });
    } else {
      selectTitleEl.style.backgroundColor = '#171717';
      listItemsElem.style.visibility = '';
    }
    open = !open;
  }
</script>

<!-- �弍�舒�亳 ��从 -->

<script>
  const selectYearEl = document.querySelector('.pseudoselect-year');
  const listItemsElement = document.querySelector('.year-list');
  // const btnOrderByEl = document.querySelector('.js-click-order-by');
  let openYear = false;
  // ==========================================
  btnOrderByEl.addEventListener('click', e => {
    e.preventDefault();
    onBtnOrderByElClick();
  });
  selectYearEl.addEventListener('click', onBtnOrderByElClick);
  // =========================================
  function onBtnOrderByElClick() {
    if (openYear === false) {
      selectYearEl.style.backgroundColor = '#34387F';
      listItemsElement.style.visibility = 'visible';
      listItemsElement.addEventListener('click', e => {
        selectYearEl.innerHTML = `${e.target.textContent}`;
        listItemsElement.style.visibility = '';
        selectYearEl.style.backgroundColor = '#171717';
        openYear = !openYear;
      });
    } else {
      selectYearEl.style.backgroundColor = '#171717';
      listItemsElement.style.visibility = '';
    }
    openYear = !openYear;
  }
</script> */
}
