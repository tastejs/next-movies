

import * as TYPES from './types';
import getConfig from './getConfig';
import getGenres from './getGenres';

const init = () => async dispatch => {
  // TODO: general loading is not used
  dispatch({type: TYPES.SET_LOADING});
  await Promise.all([dispatch(getConfig()), dispatch(getGenres())]);
  dispatch({type: TYPES.UNSET_LOADING});
};

export default init;
