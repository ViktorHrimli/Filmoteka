import { refsLib } from '../refs-lib';
import { watf } from '../renderLocalStoreg';
export function createRemoveQueve(listener, data, KEY) {
  listener.addEventListener('click', () => {
    let totalFilm = [];
    JSON.parse(localStorage.getItem(KEY[0])).filter(item => {
      if (item.id !== data.id) {
        return totalFilm.push(item);
      }
    });
    localStorage.removeItem(KEY[0]);
    localStorage.setItem(KEY[0], JSON.stringify(totalFilm));
    refsLib.backDrop.classList.add('is-hidden');
    watf(KEY[0]);
  });
}

export function createRemoveWathc(listener, data, KEY) {
  listener.addEventListener('click', () => {
    let totalFilm = [];
    JSON.parse(localStorage.getItem(KEY[1])).filter(item => {
      if (item.id !== data.id) {
        return totalFilm.push(item);
      }
    });
    localStorage.removeItem(KEY[1]);
    localStorage.setItem(KEY[1], JSON.stringify(totalFilm));
    refsLib.backDrop.classList.add('is-hidden');
    watf(KEY[1]);
  });
}
