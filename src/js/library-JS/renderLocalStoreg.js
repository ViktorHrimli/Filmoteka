const WATCH = 'watch';
const QUEVE = 'queve';
import { watf } from './logic_render';
import { refsLib } from './refs-lib';

function renderQueveList(e) {
  localStorage.setItem('find-tru-page', JSON.stringify('queve'));
  trogle(e.target.name);
  watf(QUEVE);
}
function renderWatchList(e) {
  localStorage.setItem('find-tru-page', JSON.stringify('watch'));
  trogle(e.target.name);
  watf(WATCH);
}

export function renderListAddWatch({
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

//
refsLib.btnAddWatched.addEventListener('click', renderWatchList);
refsLib.btnQueve.addEventListener('click', renderQueveList);
