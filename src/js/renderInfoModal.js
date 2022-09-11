export function renderModal(
  {
    poster_path,
    original_title,
    overview,
    popularity,
    vote_average,
    vote_count,
  },
  genr
) {
  return `
  <div class="modal">
    <svg class="modal--icon">
      <use xlink:href="./images/sprite.svg#close"></use>
    </svg>
    <div class="modal--title">
      <div class="modal--img">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"/>
      </div>
      <div class="modal--title__info">
        <h2 class="title--text">${original_title}</h2>
        <div class="conteiner--modal__list">
          <ul class="modal--title__list--left">
            <li class="list--element">
              <p>Vote / Votes</p>
            </li>
            <li class="list--element">
              <p>Popularity</p>
            </li>
            <li class="list--element">
              <p>Original Title</p>
            </li>
            <li class="list--element">
              <p>Genre</p>
            </li>
          </ul>
          <ul class="modal--title__list--right">
            <li class="list--element">
              <p class="element--value"><span class="rait">${vote_average.toFixed(
                2
              )}</span> / ${vote_count.toFixed(2)}</p>
            </li>
            <li class="list--element">
              <p class="element--value">${popularity.toFixed(2)}</p>
            </li>
            <li class="list--element">
              <p class="element--value">${original_title}</p>
            </li>
            <li class="list--element">
              <p class="element--value">${
                genr.length <= 2 ? [...genr] : [genr[0] + ' ' + genr[1]]
              }</p>
            </li>
          </ul>
        </div>
        <div class="conteiner--about">
          <p>ABOUT</p>
          <p class="about--text">${overview}</p>
        </div>
        <div class="conteiner--btn">
          <button class="btn--modal" name="watched" data-action="add-to-watch">add to Watched</button>
          <button class="btn--modal" name="queve" data-action="queve">add to queue</button>
        </div>
      </div>
    </div>
    </div>

    `;
}
