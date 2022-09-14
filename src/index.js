import {
  creteDataLocalSave,
  createDataSeveModalLocalST,
} from './js/library-JS/data_local_storeg';
import Notiflix from 'notiflix';
import addToWatchLocaleStorage from './js/library-JS/localStor-addToWatch';
import {
  createResponseTitleTrend,
  getSearchMovies,
  getIdMovies,
} from './js/mainCreateRes';
import './js/library-JS/localStor-addToWatch';
import './js/input_create_fetch';
import { renderModal } from './js/renderInfoModal';
import { renderTrendTitle } from './js/renderTrendTitle';
import { onGetCard } from './js/onOpenModal';
import { refs } from './js/refs';
const PAGE = 1;
export function creteTrendRender() {
  refs.title.innerHTML = '';
  createResponseTitleTrend(PAGE).then(({ data: { results } }) => {
    try {
      results.map(movie => {
        refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
      });
      onGetCard();
    } catch (error) {
      console.log(error);
    }
  });
}
creteTrendRender();

export function renderModalMovies(query, PAGE) {
  try {
    let g = [];
    getIdMovies(query).then(({ data }) => {
      data.genres.filter(item => {
        g.push(item.name);
        return g;
      });
      refs.backDrop.innerHTML = '';
      refs.backDrop.insertAdjacentHTML('beforeend', renderModal(data, g));
      // ===========Loc
      addToWatchLocaleStorage(creteDataLocalSave(data));
    });
  } catch (error) {
    console.log(error);
  }
}
export function getFetchSerch(query) {
  try {
    refs.title.innerHTML = '';
    getSearchMovies(query, PAGE).then(({ data: { results } }) => {
      if (results.length === 0) {
        creteTrendRender();
        return Notiflix.Notify.failure('Not a correct request');
      }
      results.map(movie => {
        refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
      });
      onGetCard();
    });
  } catch (error) {
    console.log(error);
  }
}
// =================================
// console.log(createResponse);
// function reverseStr(arr1, arr2) {
//   let total = [];
//   arr1.forEach(item => {
//     if (arr2.join(' ').includes(item)) {
//       total.push(item);
//       return total;
//     }
//     return [];
//   });

//   return total;
// }

// const a1 = ['arp', 'live', 'strong'];
// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// const b1 = ['tarp', 'mice', 'bull'];
// const b2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// // returns[('arp', 'live', 'strong')];

// console.log(reverseStr(a1, a2));
// console.log(reverseStr(b1, b2));
