import { refs } from '../refs';
function renderQueveList(e) {
  trogle(e.target.name);

  const KEY = Object.keys(localStorage);
  watf(KEY[0]);
}
function renderWatchList(e) {
  trogle(e.target.name);

  const KEY = Object.keys(localStorage);
  watf(KEY[1]);
}

function renderListAddWatch({
  filmsName,
  filmsImg,
  filmRelise,
  filmGanre,
  filmRait,
  id,
}) {
  console.log(filmGanre);
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

function trogle(name) {
  if (name === 'watched') {
    refs.btnQueve.classList.remove('active');
    refs.btnAddWatched.classList.add('active');
    return;
  }
  if (name === 'queve') {
    refs.btnAddWatched.classList.remove('active');
    refs.btnQueve.classList.add('active');
    return;
  }
}

function watf(KEY) {
  const getJs = localStorage.getItem(KEY);
  const parse = JSON.parse(getJs);
  parse.map(arr => {
    refs.titleLib.insertAdjacentHTML('beforeend', renderListAddWatch(arr));
  });
}
//
refs.btnAddWatched.addEventListener('click', renderWatchList);
refs.btnQueve.addEventListener('click', renderQueveList);
