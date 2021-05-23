
import * as TYPES from 'actions/types';

const recommendedMoviesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_RECOMMENDED_MOVIES:
      return { ...state, ...action.payload };
    case TYPES.SET_RECOMMENDED_MOVIES_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_RECOMMENDED_MOVIES_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default recommendedMoviesReducer;
