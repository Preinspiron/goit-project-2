export default {
  IndexLastThreeComics: document.querySelector('.lastComics-list'),
  IndexRandomCharacter: document.querySelector('.characters-image'),
  indexSearch: document.querySelector('.header__input'),
  indexSearchResult: document.querySelector('.characters-page-list'),
  indexLastComics: document.querySelector('#slides-container'),
  //!<=== Modal
  '[data-comics-modal]': null,
  '#modalCloseBtn': null,
  '.modal-comics-characters .items': null,

  ///!===> Modal

  //!<<<<<YEARS COMICS
  '.characters-options-list year-list': document.querySelector(
    '.characters-options-list year-list'
  ),
  //!>>>>>YEARS COMICS
  indexComicsModalOpenRenderHbs: document.querySelector('.modal-comics'),
  indexRandomUlRef: document.querySelector('#characters-list-index-renndom'),
  refresh() {
    const refreshed = Object.keys(this);
    refreshed.forEach(key => {
      this[key] = this[key] ?? document.querySelector(`${key}`);
    });
    return console.warn('Refs was Refreshed!:', this);
  },
};
