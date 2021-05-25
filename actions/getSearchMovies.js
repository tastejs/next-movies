

import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';
import { TMDB_API_VERSION } from 'config/tmdb';

const getSearchMovies = (query, page) => async dispatch => {
  try {
    dispatch({type: TYPES.SET_MOVIES_LOADING});
    const response = await tmdbAPI.get(`/${TMDB_API_VERSION}/search/movie`, {
      params: {
        query,
        page
      }
    });
    await dispatch({
      type: TYPES.FETCH_SEARCH_MOVIES,
      payload: response.data
    });
    dispatch({type: TYPES.UNSET_MOVIES_LOADING});
  } catch (error) {
    console.log('[getSearchMovies] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getSearchMovies;
