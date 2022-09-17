import { createRemove } from './removeCardMyLibr/logicRemoveCard';
import { onActiveBtnLibr } from './removeCardMyLibr/trogleClass_btn';

export function removeCardModal(data) {
  const refsFunc = {
    btnWt: document.querySelector('button[data-action="add-to-watch"]'),
    btnQueve: document.querySelector('button[data-action="queve"]'),
    btnRemoveWatch: document.querySelector('button[data-action="removeWatch"]'),
    btnRemoveQueve: document.querySelector('button[data-action="removeQueve"]'),
  };
  onActiveBtnLibr(data, refsFunc);
  createRemove(refsFunc.btnRemoveWatch, refsFunc.btnRemoveQueve, data);
}
