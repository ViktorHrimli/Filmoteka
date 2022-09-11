import { refs } from './refs';

export default function addToWatchLocaleStorage(localSave, KEY) {
  const btnWt = document.querySelector('button[data-action="add-to-watch"]');
  const btnQueve = document.querySelector('button[data-action="queve"]');
  btnQueve.addEventListener(
    'click',
    e => {
      btnQueve.classList.add('active');
      btnWt.classList.remove('active');
      save(KEY, localSave);
    },
    { once: true }
  );
  btnWt.addEventListener(
    'click',
    e => {
      btnWt.classList.add('active');
      btnQueve.classList.remove('active');
      save(KEY, localSave);
    },
    { once: true }
  );
}
function save(KEY_STORAGE, localSave) {
  try {
    const serializedState = JSON.stringify(localSave);
    localStorage.setItem(KEY_STORAGE, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
