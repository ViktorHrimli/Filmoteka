export function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.hero')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
