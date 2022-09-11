import { refs } from './refs';

export default function addToWatchLocaleStorage(localSave, KEY) {
  const btnWt = document.querySelector('button[data-action="add-to-watch"]');
  btnWt.addEventListener(
    'click',
    () => {
      btnWt.classList.add('active');
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
