
import axios from 'redaxios';

import {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_READ_ACCESS_TOKEN
} from 'config/tmdb';

/**
 * TODO:
 * RE: https://developers.themoviedb.org/4/getting-started
 * Do however, encourage you to use the new `Authorization` header for all requests since it's a system you have to use for all application and user requests besides `GET` regardless.
 * Could encounter such an issue as https://google-chrome.atlassian.net/browse/GOOGLE-89?focusedCommentId=10979.
 */

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
