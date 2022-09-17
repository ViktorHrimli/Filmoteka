import './js/page--scope';
import './js/library-JS/localStor-addToWatch';
import './js/library-JS/data_local_storeg';
import './js/input_create_fetch';
import './js/pagination_home';

import { refs } from './js/refs';
import {
  fetchIdMovies,
  fetchInputQuery,
  fetchTrendRender,
} from './js/get_fetch';
let PAGE = 1;

export function creteTrendRender(page) {
  refs.title.innerHTML = '';
  refs.conteinerBtn.innerHTML = '';
  if (!page) {
    page = PAGE;
  }
  localStorage.setItem('page', JSON.stringify(page));
  fetchTrendRender(page);
}
creteTrendRender();

export function renderModalMovies(query) {
  try {
    fetchIdMovies(query);
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
    fetchInputQuery(page, query);
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
