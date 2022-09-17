import { refs } from './refs';
import { creteTrendRender, getFetchSerch } from '..';
import { createLastFirstPage } from './pagination--last--first';

export function renderButton(page, totalPages) {
  const renderBtn = Array(totalPages)
    .fill()
    .map(
      (_, ind) =>
        `
        <button type="button" class="btn-paginaton count" data-page=${ind}>${ind}</button>
        `
    );
  createLastFirstPage(totalPages);
  createResponsePaginationBtn(renderBtn, page);
}

function createResponsePaginationBtn(arr, page) {
  if (page > 4) {
    spliceArrButtons(arr, page);
  } else {
    firsButtonsSplice(arr, page);
  }
  addListenerForBtnPag();
}

function spliceArrButtons(arr, page) {
  let num = 0;
  num = page - 3;
  const wtf = arr.splice(num, 7).join(' ');
  refs.conteinerBtn.insertAdjacentHTML('afterbegin', wtf);
  refs.conteinerBtn.children[3].classList.add('enable');
  refs.firstList.classList.remove('hiden--btn');
}

function firsButtonsSplice(arr, page) {
  refs.firstList.classList.add('hiden--btn');
  const wtf = arr.splice(1, 7).join(' ');
  refs.conteinerBtn.insertAdjacentHTML('afterbegin', wtf);
  refs.conteinerBtn.children[page - 1].classList.add('enable');
}

function addListenerForBtnPag() {
  const btnPagination = document.querySelectorAll('.count');
  for (const btn of btnPagination) {
    btn.addEventListener('click', onClickBtnPagination);
  }
}

function onClickBtnPagination(e) {
  refs.conteinerBtn.innerHTML = '';
  const { page } = e.target.dataset;
  if (JSON.parse(localStorage.getItem('query')).length > 2)
    return getFetchSerch(
      Number(page),
      JSON.parse(localStorage.getItem('query'))
    );
  else {
    creteTrendRender(Number(page));
  }
}
