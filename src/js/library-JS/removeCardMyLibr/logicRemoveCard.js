import { watf } from '../logic_render';
import { refsLib } from '../refs-lib';
// import { watf } from '../renderLocalStoreg';watf
export function createRemove(listener, data, KEY) {
  listener.addEventListener('click', e => {
    if (
      JSON.parse(localStorage.getItem(KEY[0]))
        .map(item => item.id)
        .includes(data.id)
    ) {
      return wtf(KEY[0], data);
    }
    if (
      JSON.parse(localStorage.getItem(KEY[1]))
        .map(item => item.id)
        .includes(data.id)
    ) {
      return wtf(KEY[1], data);
    }
  });
}

function wtf(KEY, data) {
  let totalFilm = [];

  JSON.parse(localStorage.getItem(KEY)).filter(item => {
    if (item.id !== data.id) {
      return totalFilm.push(item);
    }
  });
  localStorage.removeItem(KEY);
  localStorage.setItem(KEY, JSON.stringify(totalFilm));
  refsLib.backDrop.classList.add('is-hidden');
  watf(KEY);
}
