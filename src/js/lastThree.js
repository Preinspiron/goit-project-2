import Marvel from './fetchMarvel';
import Handlebars from '../hbs/lastThreeComics.hbs';
import HBSmodal from '../hbs/_modalComics.hbs';
import HBSCharacters from '../hbs/_modalComics_Characters.hbs';
import refs from './refs';
import '../images/svg/sprite.svg';

Marvel.getLastThreeComics('/comics', {
  params: {
    limit: 3,
    dateDescriptor: 'thisMonth',
  },
})
  .then(res => {
    const respJSONed = res.data.data.results;
    console.log(respJSONed);
    const hbsObjRandom = respJSONed.map(element => ({
      title: element.title,
      id: element.id,
      urlImg: element.images[0].path + '.' + element.images[0].extension,
      creators: element.creators.items[0].name,
    }));
    refs.IndexLastThreeComics.innerHTML = Handlebars(hbsObjRandom);
  })
  .then(console.log('then'))
  .catch(res => console.dir(res));

refs.indexLastComics.addEventListener('click', onClickLastComics, {
  // capture: true,
  // useCapture: true,
});

function onClickLastComics(e) {
  refs.refresh();
  console.log(refs);
  refs['[data-comics-modal]'].classList.remove('is-hidden');
  document.body.style.overflowY = 'hidden';

  if (e.target.nodeName === 'IMG')
    Marvel.getComicById(e.target.dataset.id)
      .then(
        ({
          data: {
            data: { results },
          },
        }) => results[0]
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .then(
        ({
          id,
          title,
          prices,
          format,
          thumbnail: { path, extension },
          ups,
          digitalId,
          pageCount,
          creators,
          dates,
        }) => ({
          id,
          title,
          prices: prices[0].price,
          format,
          creatorsName: creators.items[0].name,
          creatorsRole: creators.items[0].role,
          // thumbnail,
          path,
          extension,
          ups,
          digitalId,
          pageCount,
          dates: new Date(dates[1].date).getFullYear(),
        })
      )
      .then(res => {
        refs['[data-comics-modal]'].innerHTML = HBSmodal(res);
        refs['[data-comics-modal]'] = null;
        return res;
      })
      .then(res => {
        refs.refresh();
        refs['#modalCloseBtn'].addEventListener('click', onComicsModalClose);
        return res;
      })
      .then(innerModalLinkToCharacter)
      .catch(console.log);
}

const onComicsModalClose = e => {
  console.log(1);
  refs['.modal-comics-characters .items'].innerHTML = '';
  refs['#modalCloseBtn'] = null;
  refs['.modal-comics-characters .items'] = null;
  refs.refresh();
  refs['[data-comics-modal]'].classList.add('is-hidden');
  efs['[data-comics-modal]'] = null;
  document.body.style.overflowY = 'auto';
};

async function innerModalLinkToCharacter({ digitalId }) {
  const pullCharactersById = await Marvel.getComicsCharactersById(digitalId);
  const {
    data: {
      data: { results },
    },
  } = pullCharactersById;

  const characters = results.map(
    ({ thumbnail: { path, extension }, name }) => ({ path, extension, name })
  );
  console.log(characters);
  refs['.modal-comics-characters .items'] = null;
  refs.refresh();

  refs['.modal-comics-characters .items'].innerHTML = HBSCharacters(characters);
  // refs['.modal-comics-characters .items'] = null;
  console.log(refs['.modal-comics-characters .items']);

  // console.log(pullCharactersById);
}
