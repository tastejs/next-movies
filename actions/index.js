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

import init from './init';
import getConfig from './getConfig';
import getGenres from './getGenres';
import setSelectedMenuItemName from './setSelectedMenuItemName';
import getGenreMovies from './getGenreMovies';
import getStaticCategoryMovies from './getStaticCategoryMovies';
import getSearchMovies from './getSearchMovies';
import clearMovies from './clearMovies';
import getMovie from './getMovie';
import clearMovie from './clearMovie';
import getCredits from './getCredits';
import getRecommendedMovies from './getRecommendedMovies';
import clearRecommendedMovies from './clearRecommendedMovies';
import getPerson from './getPerson';
import clearPerson from './clearPerson';
import getPersonMovies from './getPersonMovies';
import clearPersonMovies from './clearPersonMovies';
import clearError from './clearError';

export {
  init,
  getConfig,
  getGenres,
  setSelectedMenuItemName,
  getGenreMovies,
  getStaticCategoryMovies,
  getSearchMovies,
  clearMovies,
  getMovie,
  clearMovie,
  getCredits,
  getRecommendedMovies,
  clearRecommendedMovies,
  getPerson,
  clearPerson,
  getPersonMovies,
  clearPersonMovies,
  clearError
};
