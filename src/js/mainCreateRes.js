import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '4568c047ac29c58c34b8c5ba81189d61';

export async function createResponseTitleTrend(page) {
  return await axios.get(`trending/movie/week?api_key=${KEY}&page=${page}`);
}

export async function getIdMovies(id) {
  return await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
}

export async function getSearchMovies(query, page) {
  return await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
}
