import {
  createRemoveQueve,
  createRemoveWathc,
} from './removeCardMyLibr/logicRemoveCard';

import onActiveBtnLibr from './removeCardMyLibr/trogleClass_btn';

export default function removeCardModal(data) {
  const refsFunc = {
    btnWt: document.querySelector('button[data-action="add-to-watch"]'),
    btnQueve: document.querySelector('button[data-action="queve"]'),
    btnRemoveCard: document.querySelector('button[data-action="remove"]'),
  };
  onActiveBtnLibr(data, Object.keys(localStorage), refsFunc);
  createRemoveWathc(refsFunc.btnRemoveCard, data, Object.keys(localStorage));
  createRemoveQueve(refsFunc.btnRemoveCard, data, Object.keys(localStorage));
}
