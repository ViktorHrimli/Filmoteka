import { refsLib } from './refs-lib';
import { onGetCard_lib } from './render_modalLira';
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
  const genre = genrArr(filmGanre);
  return `
  <li class="list--title">
          <img name="${id}" src="https://image.tmdb.org/t/p/w500${filmsImg}" alt="${filmsName}" />
        <div class="conteiner--image__title">
          <p class="image--title">
            ${filmsName} <br />
            <div class="list--ganre_date--conteiner">
            <span class="image--text">
              ${genre} | ${filmRelise}
            </span>
            <span class="rait">${filmRait.toFixed(2)}</span>
            </div>
          </p>
        </div>
      </li>
    `;
}

function genrArr(genr) {
  let genrLe = [];
  genr.map(item => genrLe.push(item.name));
  if (genrLe.length > 2) {
    genrLe.splice(2, 3);
  }
  return genrLe.join(' ');
}

function trogle(name) {
  if (name === 'watched') {
    refsLib.btnQueve.classList.remove('active');
    refsLib.btnAddWatched.classList.add('active');
    return;
  }
  if (name === 'queve') {
    refsLib.btnAddWatched.classList.remove('active');
    refsLib.btnQueve.classList.add('active');
    return;
  }
}

export function watf(KEY) {
  refsLib.titleLib.innerHTML = '';
  const getJs = localStorage.getItem(KEY);
  const parse = JSON.parse(getJs);
  parse.map(arr => {
    refsLib.titleLib.insertAdjacentHTML('beforeend', renderListAddWatch(arr));
    onGetCard_lib(arr);
  });
}
//
refsLib.btnAddWatched.addEventListener('click', renderWatchList);
refsLib.btnQueve.addEventListener('click', renderQueveList);
