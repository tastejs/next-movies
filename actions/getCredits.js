
import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';

const getCredits = () => async (dispatch, getState) => {
  const { id } = getState().movie;

  try {
    const response = await tmdbAPI.get(`/3/movie/${id}/credits`);
    dispatch({
      type: TYPES.FETCH_CREDITS,
      payload: response.data.cast
    });
  } catch (error) {
    console.log('[getCredits] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getCredits;
