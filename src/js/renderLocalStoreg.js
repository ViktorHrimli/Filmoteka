import { refs } from './refs';
const KEY = Object.keys(localStorage);
function renderWatchList(e) {
  refs.btnAddWatched.classList.add('active');
  KEY.forEach(key => {
    const getJs = localStorage.getItem(key);
    const parse = JSON.parse(getJs);
    refs.title.insertAdjacentHTML('beforeend', renderListAddWatch(parse));
  });
}

function renderListAddWatch({
  filmsName,
  filmsImg,
  filmRelise,
  filmGanre,
  filmRait,
}) {
  return `
  <li class="list--title">
          <img src="https://image.tmdb.org/t/p/w500${filmsImg}" alt="${filmsName}" />
        <div class="conteiner--image__title">
          <p class="image--title">
            ${filmsName} <br /><span class="image--text">
              ${filmGanre.name} | ${filmRelise}
            </span>
            <span class="rait">${filmRait.toFixed(2)}</span>
          </p>
        </div>
      </li>
    `;
}

//
refs.btnAddWatched.addEventListener('click', renderWatchList, { once: true });
// refs.btnQueve.addEventListener('click', renderWatchList);
