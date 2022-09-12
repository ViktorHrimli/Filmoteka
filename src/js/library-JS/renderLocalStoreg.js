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
  return `
  <li class="list--title">
          <img name="${id}" src="https://image.tmdb.org/t/p/w500${filmsImg}" alt="${filmsName}" />
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
