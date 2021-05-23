
import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';

// Get movies by genre
const getGenreMovies = (name, page, sort) => async (
  dispatch,
  getState
) => {
  const { selectedMenuItemName, genres } = getState().general;
  if (!selectedMenuItemName) {
    return;
  }
  try {
    dispatch({type: TYPES.SET_MOVIES_LOADING});
    const genreId = genres
      .filter(element => element.name === name)
      .map(element => element.id)
      .join('');
    const response = await tmdbAPI.get('/3/discover/movie', {
      params: {
        with_genres: genreId,
        page,
        sort_by: sort
      }
    });
    await dispatch({
      type: TYPES.FETCH_GENRE_MOVIES,
      payload: response.data
    });
    dispatch({type: TYPES.UNSET_MOVIES_LOADING});
  } catch (error) {
    console.log('[getGenreMovies] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getGenreMovies;
