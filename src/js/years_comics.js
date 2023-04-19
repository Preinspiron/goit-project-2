import HBS from '../hbs/years_select.hbs';
const selectEl = document.querySelector('.pseudoselect');
const listItemsEl = document.querySelector('.characters-options-list');
const btnFormatEl = document.querySelector('.js-click-format');
const selectYearEl = document.querySelector('.pseudoselect-year');
const listItemsElement = document.querySelector('#years-id');
console.log(listItemsElement);
const yearsObj = [];
for (let i = 0; i < 100; i++) yearsObj.push({ years: 2023 - i });
listItemsElement.insertAdjacentHTML('afterbegin', HBS(yearsObj));

let opened = false;
// console.log('years comics');
// =====================================
btnFormatEl.addEventListener('click', e => {
  e.preventDefault();
  onBtnFormatElClick();
});
selectEl.addEventListener('click', onBtnFormatElClick);
// ======================================
function onBtnFormatElClick(e) {
  // e.preventDefault();

  if (opened === false) {
    selectEl.style.backgroundColor = '#34387F';
    listItemsEl.style.visibility = 'visible';
    listItemsEl.addEventListener('click', e => {
      e.preventDefault();
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
  e.preventDefault();
  if (open === false) {
    selectTitleEl.style.backgroundColor = '#34387F';
    listItemsElem.style.visibility = 'visible';
    listItemsElem.addEventListener('click', e => {
      e.preventDefault();
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

let openYear = false;
// ==========================================
btnOrderByEl.addEventListener('click', e => {
  e.preventDefault();
  onBtnOrderByElClick();
});
selectYearEl.addEventListener('click', onBtnOrderByElClick);
// =========================================
function onBtnOrderByElClick(e) {
  e.preventDefault();
  if (openYear === false) {
    selectYearEl.style.backgroundColor = '#34387F';
    listItemsElement.style.visibility = 'visible';
    listItemsElement.addEventListener('click', e => {
      e.preventDefault();
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
