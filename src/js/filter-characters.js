const selectEl = document.querySelector('.pseudoselect');
const listItemsEl = document.querySelector('.characters-options-list');
const btnOrderEl = document.querySelector('.js-click-order');
let opened = false;
// ===============================
btnOrderEl.addEventListener('click', e => {
  e.preventDefault();
  onBtnOrderElClick();
});
selectEl.addEventListener('click', onBtnOrderElClick);
// ==============================
function onBtnOrderElClick(e) {
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
