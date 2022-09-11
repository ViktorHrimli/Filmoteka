import { refs } from './refs';
const KEY = Object.keys(localStorage);
function renderWatchList(e) {
  trrogleClass(e);
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

function trrogleClass(e) {
  if (e.target.name === 'watched') {
    refs.btnAddWatched.classList.add('active');
    refs.btnQueve.classList.remove('active');
  }
  if (e.target.name === 'queve') {
    refs.btnQueve.classList.add('active');
    refs.btnAddWatched.classList.remove('active');
  }
}

//
refs.btnAddWatched.addEventListener('click', renderWatchList);
refs.btnQueve.addEventListener('click', renderWatchList);
