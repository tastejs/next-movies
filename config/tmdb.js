
// TODO: use an environment variable like process.env.TMDB_API_KEY
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_API_VERSION = 3;
const TMDB_API_NEW_VERSION = 4;
const TMDB_API_READ_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN;

const TMDB_API_BASE_URL = 'https://api.themoviedb.org';
const TMDB_BASE_URL = 'https://www.themoviedb.org';

// TODO: should fetch from TMDB configuration endpoint
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

const TMDB_PAGE_LIMIT = 20;

export {
  TMDB_API_KEY,
  TMDB_API_VERSION,
  TMDB_API_NEW_VERSION,
  TMDB_API_READ_ACCESS_TOKEN,
  TMDB_API_BASE_URL,
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  TMDB_PAGE_LIMIT
};
