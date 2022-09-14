import { refs } from './refs';
for (const btn of refs.btnPagination) {
  btn.addEventListener('click', onClickBtnPagination);
}
const PAGE = 1;

function onClickBtnPagination(e) {
  e.target.previousElementSibling.classList.remove('enable');
  e.target.classList.add('enable');
  e.target.elem.nextElementSibling.classList.remove('enable');
  e.target.textContent += 1;
}
