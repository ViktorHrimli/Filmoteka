import { creteDataLocalSave } from './js/library-JS/data_local_storeg';
import Notiflix from 'notiflix';
import addToWatchLocaleStorage from './js/library-JS/localStor-addToWatch';
import './js/page--scope';
import { renderButton } from './js/pagination_home';
import {
  createResponseTitleTrend,
  getSearchMovies,
  getIdMovies,
} from './js/mainCreateRes';
import './js/library-JS/localStor-addToWatch';
import './js/input_create_fetch';
import './js/pagination_home';
import { smoothScroll } from './js/scroll--smooth';
import { renderModal } from './js/renderInfoModal';
import { renderTrendTitle } from './js/renderTrendTitle';
import { onGetCard } from './js/onOpenModal';
import { refs } from './js/refs';
let PAGE = 1;

export function creteTrendRender(page) {
  refs.title.innerHTML = '';
  refs.conteinerBtn.innerHTML = '';
  if (!page) {
    page = PAGE;
  }
  localStorage.setItem('page', JSON.stringify(page));
  createResponseTitleTrend(page).then(
    ({ data: { page, total_pages, results } }) => {
      try {
        results.map(movie => {
          refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
        });
        onGetCard();
        renderButton(page, total_pages);
        smoothScroll();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        console.log(error.mesage);
      }
    }
  );
}
creteTrendRender();

export function renderModalMovies(query) {
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
export function getFetchSerch(page, query) {
  try {
    if (!page) {
      page = PAGE;
    }
    refs.title.innerHTML = '';
    getSearchMovies(query, page).then(
      ({ data: { page, total_pages, results } }) => {
        if (results.length === 0) {
          creteTrendRender();
          return Notiflix.Notify.failure('Not a correct request');
        }
        results.map(movie => {
          refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
        });
        onGetCard();
        renderButton(page, total_pages);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

// function onClickFirstPage (totalPages)
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
