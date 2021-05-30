

/**
 * TODO:
 * AS_PREFIX can be removed.
 * PATHNAME instead of HREF could sound better.
 */

const LINKS = Object.freeze({
  HOME: {
    HREF: '/',
    AS_PREFIX: ''
  },
  GENRE: {
    HREF: '/genre',
    AS_PREFIX: ''
  },
  MOVIE: {
    HREF: '/movie',
    AS_PREFIX: ''
  },
  PERSON: {
    HREF: '/person',
    AS_PREFIX: ''
  },
  SEARCH: {
    HREF: '/search',
    AS_PREFIX: ''
  },
  LIST: {
    HREF: '/list',
    AS_PREFIX: ''
  },
  ADD_OR_EDIT_LIST: {
    HREF: '/list/add-or-edit',
    AS_PREFIX: ''
  },
  REMOVE_LIST: {
    HREF: '/list/remove',
    AS_PREFIX: ''
  },
  ADD_OR_REMOVE_ITEMS_AT_LIST: {
    HREF: '/list/add-or-remove-items',
    AS_PREFIX: ''
  },
  CHOOSE_LIST_IMAGE: {
    HREF: '/list/choose-image',
    AS_PREFIX: ''
  },
  MY_LISTS: {
    HREF: '/my-lists',
    AS_PREFIX: ''
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
