
import axios from 'redaxios';

import {
  TMDB_API_KEY,
  TMDB_BASE_URL
} from 'config/tmdb';

const tmdbAPI = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export default tmdbAPI;
