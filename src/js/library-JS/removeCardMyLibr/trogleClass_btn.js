export function onActiveBtnLibr(
  data,
  { btnWt, btnQueve, btnRemoveWatch, btnRemoveQueve }
) {
  const findPage = JSON.parse(localStorage.getItem('find-tru-page'));
  if (findPage === 'watch') {
    btnWt.classList.add('opaciti');
    btnRemoveWatch.classList.remove('opaciti');
    btnRemoveWatch.classList.add('remove');
    return;
  }
  if (findPage === 'queve') {
    btnQueve.classList.add('opaciti');
    btnRemoveQueve.classList.remove('opaciti');
    btnRemoveQueve.classList.add('remove');
    return;
  }
}
