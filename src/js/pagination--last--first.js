import { creteTrendRender } from '..';
import { refs } from './refs';
let total;
export function createLastFirstPage(totalPage) {
  total = totalPage;
  return total;
}

function onClickFirstPage(e) {
  e.preventDefault();
  creteTrendRender(1);
  refs.conteinerBtn.innerHTML = '';
}
function onClickLastPage(e) {
  e.preventDefault();
  creteTrendRender(total);
  refs.conteinerBtn.innerHTML = '';
}
refs.firstList.addEventListener('click', onClickFirstPage);
refs.lastList.addEventListener('click', onClickLastPage);
