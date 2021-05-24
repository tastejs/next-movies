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

const INITIAL_STATE = Object.freeze({
  total_pages: 0,
  page: 1,
  loading: true,
  results: []
});

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_GENRE_MOVIES:
    case TYPES.FETCH_STATIC_CATEGORY_MOVIES:
    case TYPES.FETCH_SEARCH_MOVIES:
      return { ...state, ...action.payload };
    case TYPES.SET_MOVIES_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_MOVIES_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default moviesReducer;
