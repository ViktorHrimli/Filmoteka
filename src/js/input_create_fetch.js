import Notiflix from 'notiflix';
import { refs } from './refs';
import { getFetchSerch, creteTrendRender } from '..';
function createSubmit(e) {
  e.preventDefault();
  refs.conteinerBtn.innerHTML = '';
  let query = e.target.input.value;
  if (query === '') {
    creteTrendRender();
    return Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name and '
    );
  }
  if (query.length <= 2) {
    return Notiflix.Notify.warning('Request must be more than 2 characters');
  }
  getFetchSerch(1, query);
}

function seveInutValue(e) {
  localStorage.setItem('query', JSON.stringify(e.target.value));
  if (e.target.value === '') return creteTrendRender();
}

refs.input.addEventListener('input', seveInutValue);
refs.form.addEventListener('submit', createSubmit);
