import { refs } from './refs';
import { creteTrendRender } from '..';

function onClickIncrement(e) {
  e.preventDefault();
  refs.conteinerBtn.innerHTML = '';
  creteTrendRender(JSON.parse(localStorage.getItem('page')) + 1);
}
function onClickDecrement(e) {
  e.preventDefault();
  refs.conteinerBtn.innerHTML = '';
  creteTrendRender(JSON.parse(localStorage.getItem('page')) - 1);
}

// listener
refs.increment.addEventListener('click', onClickIncrement);
refs.decrement.addEventListener('click', onClickDecrement);
