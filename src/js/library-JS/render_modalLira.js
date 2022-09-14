import { refsLib } from './refs-lib';
import { renderModalMovies_lib } from './index-lib';
export function onGetCard_lib() {
  for (let card of refsLib.titleLib.children) {
    card.addEventListener('click', onOpenModal_lib);
  }
}

export function onOpenModal_lib(e) {
  refsLib.backDrop.classList.remove('is-hidden');
  refsLib.backDrop.addEventListener('click', onClickClose_lib);
  if (!refsLib.backDrop.classList.contains('is-hidden')) {
    onEscapeClose_lib();
  }
  if (refsLib.backDrop.classList.contains('is-hidden')) {
    refsLib.backDrop.removeEventListener('click', onClickClose_lib);
  }
  renderModalMovies_lib(parseInt(e.target.name));
}

function onClickClose_lib(e) {
  if (e.target.className === 'backdrop') {
    refsLib.backDrop.classList.add('is-hidden');
  }
}

export function onEscapeClose_lib() {
  window.addEventListener('keydown', onCloseModalEscape_lib, { once: true });
}

function onCloseModalEscape_lib(e) {
  if (e.code === 'Escape') return refsLib.backDrop.classList.add('is-hidden');
}
