import flatpickr from 'flatpickr';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import Notiflix from 'notiflix';
import { MarvelApi } from './marvel-api';
import renderGallery from '../hbs/_renderStartCharactersPage.hbs';
import debounce from 'lodash.debounce';

const elements = {
  gallery: document.querySelector('.js-gallery'),
  inputNameStart: document.querySelector('.js-filters-input'),
  filtersSelect: document.querySelector('.js-filters-select'),
  optionsList: document.querySelector('.js-characters-options-list'),
  tuiPagination: document.querySelector('.js-tui-pagination'),
};

let totalPages = null;
let offset = null;
let nameStartsWith = null;
let totalItemsPage = 0;
let orderBy = null;

if(window.innerWidth === 375) {
    totalItemsPage = 5;
  }
  
  if(window.innerWidth === 768) {
    totalItemsPage = 8;
  }
  
  if(window.innerWidth === 1440) {
    totalItemsPage = 16;
  }

const optionsPagination = {
  totalItems: 0,
  itemsPerPage: totalItemsPage,
  visiblePages: 10,
  page: 10,
};

const pagination = new Pagination(elements.tuiPagination, optionsPagination);
pagination.on('beforeMove', loadMore);


const marvelApi = new MarvelApi();
renderStartPage();

async function renderStartPage() {
  const {
    data: {
      data: { results },
    },
  } = await marvelApi.getCharactersLoadPage();

  const data = results.map(({ id, name, thumbnail: { path, extension } }) => {
    return {
      path,
      extension,
      name,
      id,
    };
  });
  const filterImgNotAvailable = data
    .filter(item => !item.path.endsWith('image_not_available'))
    .slice(0, totalItemsPage);
  
  elements.gallery.insertAdjacentHTML(
    'beforeend',
    renderGallery(filterImgNotAvailable)
  );
}

elements.inputNameStart.addEventListener(
  'input',
  debounce(onSerchCharacters, 2000)
);

// elements.filtersSelect.addEventListener('click', onListenerSelect);

// function onListenerSelect () {
//   elements.optionsList.addEventListener('click', onSelect);
// }

// function onSelect (event) {
//   orderBy = event.target.textContent 
// }

async function onSerchCharacters(event) {
  event.preventDefault();

  elements.tuiPagination.classList.add('is-hidden');
  elements.gallery.innerHTML = '';

  nameStartsWith = event.target.value;
  console.log(nameStartsWith);

  try {
      const {
        data: {
          data: { count, offset, total, results },
        },
      } = await marvelApi.getCharacters({ nameStartsWith , orderBy});

      totalPages = Math.floor(total / totalItemsPage);
      console.log(totalPages);

      if (total === 0 || results.length === 0) {
        pagination.reset(0);
        return;
      }

      const charactersImgPage = results.map(
        ({ id, name, thumbnail: { path, extension } }) => {
          return {
            path,
            extension,
            name,
            id,
          };
        }
      );

      const filterImg = charactersImgPage
        .filter(item => !item.path.endsWith('image_not_available'))
        .slice(0, totalItemsPage);
      console.log(filterImg);

      elements.gallery.insertAdjacentHTML(
        'beforeend',
        renderGallery(filterImg)
      );
      if (totalPages > 1) {
        elements.tuiPagination.classList.remove('is-hidden');

        pagination.reset(total);
      }

  } catch (error) {
    console.log(error);
  }
}

async function loadMore(event) {
  offset += totalItemsPage;
  console.log(offset);

  try {
    const {
      data: {
        data: { results },
      },
    } = await marvelApi.getCharacters({ nameStartsWith, offset });

    const charactersImgPage = results.map(
      ({ id, name, thumbnail: { path, extension } }) => {
        return {
          path,
          extension,
          name,
          id,
        };
      }
    );

    const filterImgPage = charactersImgPage
      .filter(item => !item.path.endsWith('image_not_available'))
      .slice(0, totalItemsPage);
    elements.gallery.innerHTML = renderGallery(filterImgPage);
  } catch (error) {
    console.log(error.message);
  }
}
