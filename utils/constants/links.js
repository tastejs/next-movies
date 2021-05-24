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

// TODO: <
/**
 * TODO:
 * AS_PREFIX can be removed.
 * PATHNAME instead of HREF could sound better.
 */
// TODO: >

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
