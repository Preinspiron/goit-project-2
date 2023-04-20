import { MarvelApi } from './marvel-api';
import { getMonth } from './getDate';
import RenderModal from '../hbs/_modal-characters.hbs';

const marvelApi = new MarvelApi();

const elements = {
  // Modal window
  openModalBtn: document.querySelector('[data-modal-open]'),

  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backDrop: document.querySelector('[data-backdrop]'),

  modalAboutCharacters: document.querySelector('.js-modal-characters'),
  serhCharacters: document.querySelector('.js-characters-page-list'),

  // Slider - modal
  imgMaxConteiner: document.querySelector('.js-img-max-conteiner'),
  imgMax: document.querySelector('.js-img-max'),
  imgMinList: document.querySelector('.js-img-list'),
};

elements.openModalBtn.addEventListener('click', openModal);

setTimeout(() => {
  const openRandomModal = document.querySelectorAll('[data-characters-random]');
  openRandomModal.forEach(item => {
    item.addEventListener('click', openModal);
  });
}, 1000);

async function openModal(event) {
  console.log(event.target);
  try {
    const all = await Promise.allSettled([
      marvelApi.getCharactersById(event.target.id),
      marvelApi.getCharactersByIdComics(event.target.id),
    ]);

    const [
      {
        value: {
          data: {
            data: { results: resultsCharacters },
          },
        },
      },
      {
        value: {
          data: {
            data: { results: resultsComics },
          },
        },
      },
    ] = all;

    console.log(resultsComics);
    console.log(resultsCharacters);
    const dataRenderModalCharacters = resultsCharacters.map(item => {
      return {
        modified: item.modified,
        path: item.thumbnail.path,
        extension: item.thumbnail.extension,
        name: item.name,
        description: item.description,
      };
    });

    console.log(dataRenderModalCharacters);
    const dataRenderModalComics = resultsComics.map(item => {
      // const cutIndex = item.title.indexOf('(');
      const title = item.title.slice(0, 18).concat(' ...');
      return {
        title: title,
        creators: item.creators.items[0].name,
        images:
          item.images.length !== 0
            ? item.images.slice(0, 1)
            : [
                {
                  extension: 'jpg',
                  path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9',
                },
              ],
      };
    });

    console.log(dataRenderModalComics);
    const date = new Date(dataRenderModalCharacters[0].modified);
    const dateTime = [
      {
        year: date.getFullYear(),
        month: getMonth(date.getMonth()),
        day: date.getDate(),
      },
    ];

    const dataRenderAll = Object.assign(
      {},
      ...dataRenderModalCharacters,
      ...dateTime
    );

    console.log(dataRenderAll);

    elements.modalAboutCharacters.insertAdjacentHTML(
      'beforeend',
      RenderModal(dataRenderAll)
    );

    elements.modal.classList.toggle('is-hidden');

    setTimeout(() => {
      listenerModal();
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}

function listenerModal() {
  document.addEventListener('keydown', closeModal);
  elements.backDrop.addEventListener('click', closeModal);
  elements.closeModalBtn.addEventListener('click', () => {
    deleteListenerModal();
    clearModal();
  });

  // elements.imgMinList.addEventListener('click', onClickReplaceImg);
}

function deleteListenerModal() {
  elements.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModal);
  elements.backDrop.removeEventListener('click', closeModal);
}

function closeModal(event) {
  if (event.code === 'Escape') {
    deleteListenerModal();
    clearModal();
  }

  if (event.target === elements.backDrop) {
    deleteListenerModal();
    clearModal();
  }
}

function clearModal() {
  elements.modalAboutCharacters.innerHTML = '';
}

function onClickReplaceImg(event) {
  if (event.target.classList.contains('js-img-min')) {
    let pathNewMaxImg = event.target.src;
    renderImgGallery(pathNewMaxImg);
  }
}

function renderImgGallery(path) {
  elements.imgMaxConteiner.innerHTML = `<img src="${path}" alt="" width="295" height="387">`;
}
