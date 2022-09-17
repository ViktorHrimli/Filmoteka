export function localSave_lib(data) {
  const year = new Date(data.release_date).getFullYear();
  const localSave = {
    filmsName: data.original_title,
    filmsImg: data.poster_path,
    filmRelise: year,
    filmGanre: data.genres,
    filmRait: data.vote_average,
    id: data.id,
  };

  return localSave;
}
