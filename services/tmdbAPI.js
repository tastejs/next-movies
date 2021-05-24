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

import axios from 'redaxios';

import {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_READ_ACCESS_TOKEN
} from 'config/tmdb';

// TODO: <
/**
 * TODO:
 * RE: https://developers.themoviedb.org/4/getting-started
 * Do however, encourage you to use the new `Authorization` header for all requests since it's a system you have to use for all application and user requests besides `GET` regardless.
 * Could encounter such an issue as https://google-chrome.atlassian.net/browse/GOOGLE-89?focusedCommentId=10979.
 */
// TODO: >

const tmdbAPI = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`
  }
});

const alternativeTmdbAPI = axios.create({
  baseURL: TMDB_API_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  }
});

export {
  alternativeTmdbAPI
};

export default tmdbAPI;
