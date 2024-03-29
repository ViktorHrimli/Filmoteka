import { refs } from '../refs';
const WATCH = 'watch';
const QUEVE = 'queve';
export function addToWatchLocaleStorage(localSave) {
  const btnWt = document.querySelector('button[data-action="add-to-watch"]');
  const btnQueve = document.querySelector('button[data-action="queve"]');
  closeModalQueve(btnQueve, localSave, btnWt);
  closeModalWathc(btnWt, localSave, btnQueve);
}

function closeModalWathc(btnWt, localSave, btnQueve) {
  btnWt.addEventListener(
    'click',
    e => {
      btnWt.classList.add('active');
      btnQueve.classList.remove('active');
      localStorageSaveData(WATCH, localSave);
      setTimeout(() => {
        refs.backDrop.classList.add('is-hidden');
      }, 300);
    },
    { once: true }
  );
}

function closeModalQueve(btnQueve, localSave, btnWt) {
  btnQueve.addEventListener(
    'click',
    () => {
      btnQueve.classList.add('active');
      btnWt.classList.remove('active');
      localStorageSaveData(QUEVE, localSave);
      setTimeout(() => {
        refs.backDrop.classList.add('is-hidden');
      }, 300);
    },
    { once: true }
  );
}

export function localStorageSaveData(KEY, arr) {
  let localSt = [];
  localSt = JSON.parse(localStorage.getItem(KEY)) || [];
  localSt.map(item => item.id).includes(arr.id) ? true : localSt.push(arr);
  localStorage.setItem(KEY, JSON.stringify(localSt));
}
