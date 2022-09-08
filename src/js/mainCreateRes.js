import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '4568c047ac29c58c34b8c5ba81189d61';

export async function createResponseTitleTrend() {
  return await axios.get(`trending/all/day?api_key=${KEY}`);
}

export async function getIdsGenres() {
  return await axios.get(`genre/movie/list?api_key=${KEY}&language=en-US`);
}

export async function getIdMovies(query) {
  return await axios.get(`movie/{${query}}?api_key=${KEY}`);
}
