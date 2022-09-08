import { createResponseTitleTrend, getIdsGenres } from './js/mainCreateRes';
import { renderTrendTitle } from './js/renderTrendTitle';
import { refs } from './js/refs';
let genr;
getIdsGenres().then(({ data }) => {
  return (genr = data.genres);
});

createResponseTitleTrend().then(({ data }) => {
  data.results.map(movie => {
    refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie, genr));
  });
});

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
