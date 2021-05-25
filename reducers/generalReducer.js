

import * as TYPES from 'actions/types';

import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const INITIAL_STATE = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  loading: true,
  base: {
    images: {
      // TODO: relatively static so hardcode it initially and replace with the fetched data
      secure_base_url: 'https://image.tmdb.org/t/p/'
    }
  },
  genres: [],
  selectedMenuItemName: 'Please wait a moment.'
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_CONFIG:
      return { ...state, base: action.payload };
    case TYPES.FETCH_GENRES:
      return { ...state, ...action.payload };
    case TYPES.SET_SELECTED_MENU_ITEM_NAME:
      return { ...state, selectedMenuItemName: action.payload };
    case TYPES.UNSET_SELECTED_MENU_ITEM_NAME:
      return { ...state, selectedMenuItemName: INITIAL_STATE.selectedMenuItemName };
    case TYPES.SET_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default generalReducer;
