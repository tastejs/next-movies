
import Router from 'next/router';

import * as TYPES from './types';
import LINKS from 'utils/constants/links';

// Set the current selected menu item (discover or genre) if is valid
const setSelectedMenuItemName = name => (dispatch, getState) => {
  const { staticCategories, genres } = getState().general;
  if (!name) {
    dispatch({type: TYPES.UNSET_SELECTED_MENU_ITEM_NAME});
  } else if (
    staticCategories.find(category => category.name === name) ||
    genres.find(genre => genre.name === name)
  ) {
    dispatch({
      type: TYPES.SET_SELECTED_MENU_ITEM_NAME,
      payload: name
    });
  } else {
    Router.push(LINKS.NOT_FOUND.HREF);
  }
};

export default setSelectedMenuItemName;
