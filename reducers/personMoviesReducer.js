

import * as TYPES from 'actions/types';

const personMoviesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_PERSON_MOVIES:
      return { ...state, ...action.payload };
    case TYPES.SET_PERSON_MOVIES_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_PERSON_MOVIES_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default personMoviesReducer;
