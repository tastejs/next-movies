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

import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import SortBy from 'components/SortBy';
import { SCROLL_TO_ELEMENT } from 'utils/constants';

const PersonMovieList = ({
  baseUrl,
  personMovies,
  sortByOptionValue,
  sortByOptionValueOnChange
}) => (
  <PaddingWrapper>
    <Element name={SCROLL_TO_ELEMENT}>
      <Header
        className='header-alignment'
        title='Also enters in'
        subtitle='movies' />
    </Element>
    {personMovies.loading ? (
      <Loader centerRow />
    ) : (
      personMovies.total_results === 0 ? (
        <NotFound
          title='Sorry!'
          subtitle='There are no more movies...' />
      ) : (
        <>
          <SortBy
            value={sortByOptionValue}
            onChange={sortByOptionValueOnChange} />
          <MovieList
            baseUrl={baseUrl}
            movies={personMovies} />
        </>
      )
    )}
  </PaddingWrapper>
);

export default PersonMovieList;
