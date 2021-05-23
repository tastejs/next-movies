
import * as TYPES from './types';
import getConfig from './getConfig';
import getGenres from './getGenres';

const init = () => async dispatch => {
  dispatch({type: TYPES.SET_LOADING});
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({type: TYPES.UNSET_LOADING});
};

export default init;
