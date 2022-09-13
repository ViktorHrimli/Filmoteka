import { refsLib } from '../refs-lib';
import { watf } from '../renderLocalStoreg';
export function createRemove(listener, data, KEY) {
  listener.addEventListener('click', e => {
    if (
      JSON.parse(localStorage.getItem(KEY[0]))
        .map(item => item.id)
        .includes(data.id)
    ) {
      wtf(KEY[0], data);
    }
    wtf(KEY[1], data);
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
