import { refsLib } from './refs-lib';
import './removeCard_lib';
import '../mainCreateRes';
import './localStor-addToWatch';
import './renderLocalStoreg';
import './render_modalLira';
import './updateCardMylibr/update_card_lib';
import './updateCardMylibr/update_button_lib';
import removeCardModal from './removeCard_lib';
import { renderModal_Lib } from './modal-libr';
import { getIdMovies } from '../mainCreateRes';
import localSave_lib from './updateCardMylibr/arr_card_update';
import updateCardModal from './updateCardMylibr/update_card_lib';
import { onClickMyLibraryBtn } from './logic_render';
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
      updateCardModal(localSave_lib(data));
      removeCardModal(data);
    })
    .catch(console.error);
}

onClickMyLibraryBtn('watch');
