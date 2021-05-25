
import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';
import { TMDB_API_VERSION } from 'config/tmdb';

// Get recommended movies associated with the movie
const getRecommendedMovies = (id, page) => async dispatch => {
  try {
    dispatch({type: TYPES.SET_RECOMMENDED_MOVIES_LOADING});
    const response = await tmdbAPI.get(`/${TMDB_API_VERSION}/movie/${id}/recommendations`, {
      params: {page}
    });
    await dispatch({
      type: TYPES.FETCH_RECOMMENDED_MOVIES,
      payload: response.data
    });
    dispatch({type: TYPES.UNSET_RECOMMENDED_MOVIES_LOADING});
  } catch (error) {
    console.log('[getRecommendedMovies] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getRecommendedMovies;
