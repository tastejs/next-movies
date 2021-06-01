

/**
 * TODO:
 * AS_PREFIX can be removed.
 * PATHNAME instead of HREF could sound better.
 */

const LINKS = Object.freeze({
  HOME: {
    HREF: '/',
  },
  GENRE: {
    HREF: '/genre',
  },
  MOVIE: {
    HREF: '/movie',
  },
  PERSON: {
    HREF: '/person',
  },
  SEARCH: {
    HREF: '/search',
  },
  LIST: {
    HREF: '/list',
  },
  ADD_OR_EDIT_LIST: {
    HREF: '/list/add-or-edit',
  },
  REMOVE_LIST: {
    HREF: '/list/remove',
  },
  ADD_OR_REMOVE_ITEMS_AT_LIST: {
    HREF: '/list/add-or-remove-items',
  },
  CHOOSE_LIST_IMAGE: {
    HREF: '/list/choose-image',
  },
  MY_LISTS: {
    HREF: '/my-lists',
  },
  NOT_FOUND: {
    HREF: '/404',
  },
  ERROR: {
    HREF: '/error',
  }
});

export default LINKS;
