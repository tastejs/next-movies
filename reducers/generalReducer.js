/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
