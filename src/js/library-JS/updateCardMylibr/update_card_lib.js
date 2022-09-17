import { updateToQueve, updateToWatch } from './update_button_lib';

export function updateCardModal(data) {
  const refsFunc = {
    btnWt: document.querySelector('button[data-action="add-to-watch"]'),
    btnQueve: document.querySelector('button[data-action="queve"]'),
    btnRemoveCard: document.querySelector('button[data-action="remove"]'),
  };
  const WATCH = 'watch';
  const QUEVE = 'queve';
  updateToQueve(refsFunc.btnWt, data, WATCH, QUEVE);
  updateToWatch(refsFunc.btnQueve, data, WATCH, QUEVE);
}
