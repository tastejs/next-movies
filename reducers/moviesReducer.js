

import * as TYPES from 'actions/types';

const INITIAL_STATE = Object.freeze({
  total_pages: 0,
  page: 1,
  loading: true,
  results: []
});

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_GENRE_MOVIES:
    case TYPES.FETCH_STATIC_CATEGORY_MOVIES:
    case TYPES.FETCH_SEARCH_MOVIES:
      return { ...state, ...action.payload };
    case TYPES.SET_MOVIES_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_MOVIES_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default moviesReducer;
