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

// TODO: vulnerable
const YES_OR_NO_OPTIONS = [
  {value: 'true', name: 'Yes'},
  {value: 'false', name: 'No'}
];

const SORT_BY_OPTIONS = [
  {value: 'popularity.desc', name: 'Popularity'},
  {value: 'vote_average.desc', name: 'Votes Average'},
  {value: 'original_title.asc', name: 'Original Title'},
  {value: 'release_date.desc', name: 'Release Date'}
];

export {
  YES_OR_NO_OPTIONS,
  SORT_BY_OPTIONS
};
