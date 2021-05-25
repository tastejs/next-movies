

import * as TYPES from 'actions/types';

const personReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_PERSON:
      return { ...state, ...action.payload };
    case TYPES.SET_PERSON_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_PERSON_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default personReducer;
