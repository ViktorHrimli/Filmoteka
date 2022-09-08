export function renderTrendTitle(
  {
    title,
    poster_path,
    genre_ids,
    release_date,
    vote_average,
    name,
    first_air_date,
  },
  genre
) {
  const originalName = findTruName(name, title);
  const getGenre = findIdGenre(genre_ids, genre);
  const getOriginalDate = findDate(release_date, first_air_date);
  return `
  <li class="list--title">
          <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${originalName}" />
        <div class="conteiner--image__title">
          <p class="image--title">
            ${originalName} <br /><span class="image--text">
              ${getGenre} | ${getOriginalDate}
            </span>
            <span class="rait">${vote_average.toFixed(2)}</span>
          </p>
        </div>
      </li>
    `;
}

function findIdGenre(Ids, genre) {
  const total = parseInt(Ids.join(' '));
  let ganreName = '';
  genre.filter(element => {
    if (element.id === total) {
      return (ganreName += element.name);
    }
  });
  return ganreName;
}

function findTruName(name, title) {
  let originalName = '';
  if (name) {
    return (originalName = name);
  }
  if (title) {
    return (originalName = title);
  }
}

function findDate(releaseDate, airDate) {
  let originalDate = '';
  if (releaseDate) {
    return (originalDate = releaseDate);
  }
  if (airDate) {
    return (originalDate = airDate);
  }
}
