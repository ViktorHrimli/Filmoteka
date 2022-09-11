import { refs } from './refs';
import { renderModalMovies } from '../index';
export function onGetCard(e) {
  for (let card of refs.title.children) {
    card.addEventListener('click', onOpenModal);
  }
}

export function onOpenModal(e) {
  refs.backDrop.classList.remove('is-hidden');
  refs.backDrop.addEventListener('click', onClickClose);
  if (!refs.backDrop.classList.contains('is-hidden')) {
    onEscapeClose();
  }
  if (refs.backDrop.classList.contains('is-hidden')) {
    refs.backDrop.removeEventListener('click', onClickClose);
  }
  renderModalMovies(parseInt(e.target.name));
}

function onClickClose(e) {
  if (e.target.className === 'backdrop') {
    refs.backDrop.classList.add('is-hidden');
  }
}

export function onEscapeClose() {
  window.addEventListener('keydown', onCloseModalEscape, { once: true });
}

function onCloseModalEscape(e) {
  if (e.code === 'Escape') return refs.backDrop.classList.add('is-hidden');
}
