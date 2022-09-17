import { watf } from '../logic_render';
import { refsLib } from '../refs-lib';
import { removeWatch, removeQueve } from './remove_card';
export function createRemove(listenerWatch, listenerQueve, data) {
  listenerWatch.addEventListener('click', e => {
    console.log(e.target);
    removeWatch(data);
  });
  listenerQueve.addEventListener('click', e => {
    console.log(e.target);
    removeQueve(data);
  });
}

export function findRemoveCard(KEY, data) {
  let totalFilm = [];
  console.log(KEY);
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
