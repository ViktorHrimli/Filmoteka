import Notiflix from 'notiflix';
import { refs } from './refs';
import { getFetchSerch, creteTrendRender } from '..';

Notiflix.Notify.init({});
function createSubmit(e) {
  e.preventDefault();
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
  getFetchSerch(query);
}

refs.form.addEventListener('submit', createSubmit);
