import Notiflix from 'notiflix';
import { creteDataLocalSave } from './library-JS/data_local_storeg';
import { addToWatchLocaleStorage } from './library-JS/localStor-addToWatch';
import {
  getSearchMovies,
  createResponseTitleTrend,
  getIdMovies,
} from './mainCreateRes';
import { creteTrendRender } from '..';
import { onGetCard } from './onOpenModal';
import { renderModal } from './renderInfoModal';
import { renderButton } from './pagination_home';
import { renderTrendTitle } from './renderTrendTitle';
import { smoothScroll } from './scroll--smooth';
import { refs } from './refs';

export function fetchInputQuery(page, query) {
  getSearchMovies(query, page).then(
    ({ data: { page, total_pages, results } }) => {
      if (results.length === 0) {
        creteTrendRender();
        return Notiflix.Notify.failure('Not a correct request');
      }
      results.map(movie => {
        refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
      });
      onGetCard();
      renderButton(page, total_pages);
    }
  );
}

export function fetchTrendRender(page) {
  createResponseTitleTrend(page).then(
    ({ data: { page, total_pages, results } }) => {
      try {
        results.map(movie => {
          refs.title.insertAdjacentHTML('afterbegin', renderTrendTitle(movie));
        });
        onGetCard();
        renderButton(page, total_pages);
        smoothScroll();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
}

export function fetchIdMovies(query) {
  let g = [];
  getIdMovies(query).then(({ data }) => {
    data.genres.filter(item => {
      g.push(item.name);
      return g;
    });
    refs.backDrop.innerHTML = '';
    refs.backDrop.insertAdjacentHTML('beforeend', renderModal(data, g));
    // ===========Loc
    addToWatchLocaleStorage(creteDataLocalSave(data));
  });
}
