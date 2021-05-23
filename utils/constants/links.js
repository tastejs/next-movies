
import QUERY_PARAMS from './query-params';

const LINKS = Object.freeze({
  HOME: {
    HREF: '/',
    AS_PREFIX: ''
  },
  GENRE: {
    HREF: `/genre/[${QUERY_PARAMS.NAME}]`,
    AS_PREFIX: '/genre'
  },
  MOVIE: {
    HREF: `/movie/[${QUERY_PARAMS.ID}]`,
    AS_PREFIX: '/movie'
  },
  PERSON: {
    HREF: `/person/[${QUERY_PARAMS.ID}]`,
    AS_PREFIX: '/person'
  },
  SEARCH: {
    HREF: `/search/[${QUERY_PARAMS.SEARCH_TERM}]`,
    AS_PREFIX: '/search'
  },
  NOT_FOUND: {
    HREF: '/404',
    AS_PREFIX: ''
  },
  ERROR: {
    HREF: '/error',
    AS_PREFIX: ''
  }
});

export default LINKS;
