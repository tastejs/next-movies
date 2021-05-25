
import * as TYPES from './types';

// Set the current selected menu item (discover or genre) if is valid
const setSelectedMenuItemName = name => dispatch => {
  if (!name) {
    dispatch({type: TYPES.UNSET_SELECTED_MENU_ITEM_NAME});
  } else {
    dispatch({
      type: TYPES.SET_SELECTED_MENU_ITEM_NAME,
      payload: name
    });
  }
};

export default setSelectedMenuItemName;
