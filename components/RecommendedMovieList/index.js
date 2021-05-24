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
import { SCROLL_TO_ELEMENT } from 'utils/constants';

const RecommendedMovieList = ({
  recommendedMovies,
  baseUrl
}) => (
  <PaddingWrapper>
    <Element name={SCROLL_TO_ELEMENT}>
      <Header
        title='Recommended'
        subtitle='movies' />
    </Element>
    {recommendedMovies.loading ? (
      <Loader centerRow />
    ) : (
      recommendedMovies.total_results === 0 ? (
        <NotFound
          title='Sorry!'
          subtitle='There are no recommended movies...' />
      ) : (
        <MovieList
          movies={recommendedMovies}
          baseUrl={baseUrl} />
      )
    )}
  </PaddingWrapper>
);

export default RecommendedMovieList;
