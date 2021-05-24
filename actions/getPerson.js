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

import Router from 'next/router';

import * as TYPES from './types';
import tmdbAPI from 'services/tmdbAPI';
import LINKS from 'utils/constants/links';
import { TMDB_API_VERSION } from 'config/tmdb';

const getPerson = id => async dispatch => {
  try {
    dispatch({type: TYPES.SET_PERSON_LOADING});
    const response = await tmdbAPI.get(`/${TMDB_API_VERSION}/person/${id}`);
    await dispatch({
      type: TYPES.FETCH_PERSON,
      payload: response.data
    });
    dispatch({type: TYPES.UNSET_PERSON_LOADING});
  } catch (error) {
    console.log('[getPerson] error => ', error);
    dispatch({type: TYPES.INSERT_ERROR, payload: error.response});
    Router.push(LINKS.ERROR.HREF);
  }
};

export default getPerson;
