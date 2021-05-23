
import * as TYPES from 'actions/types';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.INSERT_ERROR:
      if (!action.payload) {
        return [];
      }
      return action.payload;
    case TYPES.CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
