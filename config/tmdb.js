
// TODO: use an environment variable like process.env.TMDB_API_KEY
const TMDB_API_KEY = '9a31326bc179b029cd4513c489628e79';
const TMDB_API_VERSION = 3;
const TMDB_API_NEW_VERSION = 4;
const TMDB_API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTMxMzI2YmMxNzliMDI5Y2Q0NTEzYzQ4OTYyOGU3OSIsInN1YiI6IjVmMzA4NjlhNzczOTQxMDAzNWU4OTVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Kv4z1riGEYtcZ3XhW0shXy99DWI3e5xYbtYQY4FwAY';

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
