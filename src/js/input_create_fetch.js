import { refs } from './refs';
import { getFetchSerch } from '..';
import lodash from 'lodash.debounce';
refs.input.addEventListener('input', lodash(createQuery, 500));

function createQuery(e) {
  let query = e.target.value;
  if (query !== '') getFetchSerch(query);
}

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."
