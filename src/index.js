// import './js/index-lib';
import addToWatchLocaleStorage from './js/localStor-addToWatch';
import {
  createResponseTitleTrend,
  getIdsGenres,
  getIdMovies,
} from './js/mainCreateRes';
import { renderModal } from './js/renderInfoModal';
import { renderTrendTitle } from './js/renderTrendTitle';
import { onGetCard } from './js/onOpenModal';
import { refs } from './js/refs';

let genr;
Promise.all([createResponseTitleTrend(), getIdsGenres()]).then(
  ([
    {
      data: { results },
    },
    {
      data: { genres },
    },
  ]) => {
    genr = genres;
    results.map(movie => {
      refs.title.insertAdjacentHTML(
        'afterbegin',
        renderTrendTitle(movie, genr)
      );
    });
    onGetCard(results);
  }
);
export function renderModalMovies(query) {
  let g = [];
  getIdMovies(query)
    .then(({ data }) => {
      data.genres.filter(item => {
        g.push(item.name);
        return g;
      });
      refs.backDrop.innerHTML = '';
      refs.backDrop.insertAdjacentHTML('beforeend', renderModal(data, g));
      // ===========Loc
      const year = new Date(data.release_date).getFullYear();
      const localSave = {
        filmsName: data.original_title,
        filmsImg: data.poster_path,
        filmRelise: year,
        filmGanre: data.genres,
        filmRait: data.vote_average,
      };
      addToWatchLocaleStorage(localSave, data.original_title);
    })
    .catch(console.error);
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
