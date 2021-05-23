
import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';

// Get genres from TMDB API
const getGenres = () => async dispatch => {
  try {
    const response = await tmdbAPI.get('/3/genre/movie/list');
    dispatch({
      type: TYPES.FETCH_GENRES,
      payload: response.data
    });
  } catch (error) {
    console.log('[getGenres] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getGenres;
