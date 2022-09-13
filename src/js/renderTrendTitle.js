import genre from '../genres.json';
export function renderTrendTitle({
  title,
  poster_path,
  genre_ids,
  release_date,
  vote_average,
  name,
  first_air_date,
  id,
}) {
  const originalName = findTruName(name, title);
  const getGenre = findIdGenre(genre_ids, genre);
  const getOriginalDate = findDate(release_date, first_air_date);
  return `
  <li class="list--title">
          <img name="${id}"   src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${originalName}" />
        <div class="conteiner--image__title">
          <p class="image--title">
            ${originalName} <br />
            <div class="list--ganre_date--conteiner">
            <span class="image--text">
              ${getGenre} | ${getOriginalDate.slice(0, 4)}
            </span>
            <span class="rait">${vote_average.toFixed(2)}</span>
            </div>
          </p>
        </div>
      </li>
    `;
}

export default function findIdGenre(Ids, { genres }) {
  let g = [];
  for (let i = 0; i < Ids.length; i += 1) {
    genres.find(({ id, name }) => {
      if (id === Ids[i]) {
        g.push(name);
      }
    });
  }
  if (g.length > 2) g.splice(2, 3);
  return g.join(' ');
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
