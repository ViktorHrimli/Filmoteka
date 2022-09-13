export default function onActiveBtnLibr(
  data,
  KEY,
  { btnWt, btnQueve, btnRemoveCard }
) {
  if (
    JSON.parse(localStorage.getItem(KEY[0]))
      .map(item => item.id)
      .includes(data.id)
  ) {
    // btnWt.classList.add('active');
    btnQueve.classList.add('opaciti');
    btnRemoveCard.classList.remove('opaciti');
    btnRemoveCard.classList.add('remove');
    return;
  }
  if (
    JSON.parse(localStorage.getItem(KEY[1]))
      .map(item => item.id)
      .includes(data.id)
  ) {
    btnWt.classList.add('opaciti');
    // btnWt.classList.add('active');
    btnRemoveCard.classList.remove('opaciti');
    btnRemoveCard.classList.add('remove');
    return;
  }
}
