import { refsLib } from './refs-lib';
import './removeCard_lib';
import '../mainCreateRes';
import './localStor-addToWatch';
import './renderLocalStoreg';
import './render_modalLira';
import { renderModal_Lib } from './modal-libr';
import { getIdMovies } from '../mainCreateRes';
import removeCardModal from './removeCard_lib';

export function renderModalMovies_lib(query) {
  let g = [];
  getIdMovies(query)
    .then(({ data }) => {
      data.genres.filter(item => {
        g.push(item.name);
        return g;
      });
      refsLib.backDrop.innerHTML = '';
      refsLib.backDrop.insertAdjacentHTML(
        'beforeend',
        renderModal_Lib(data, g)
      );
      removeCardModal(data);
    })
    .catch(console.error);
}
