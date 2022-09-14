import { refsLib } from './refs-lib';
import { renderListAddWatch } from './renderLocalStoreg';
import { onGetCard_lib } from './render_modalLira';
export function watf(KEY) {
  refsLib.titleLib.innerHTML = '';
  JSON.parse(localStorage.getItem(KEY)).map(arr => {
    refsLib.titleLib.insertAdjacentHTML('beforeend', renderListAddWatch(arr));
    onGetCard_lib();
  });
}

export function onClickMyLibraryBtn(KEY) {
  if (JSON.parse(localStorage.getItem('watch')).length < 1) {
    refsLib.poster.classList.remove('dis');
    return;
  }
  refsLib.poster.classList.add('dis');
  refsLib.btnAddWatched.classList.add('active');
  watf('watch');
}
