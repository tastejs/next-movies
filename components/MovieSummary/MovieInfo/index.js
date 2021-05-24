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

import InfoWrapper from 'parts/InfoWrapper';
import Header from 'parts/Header';
import BasicsSection from './BasicsSection';
import TheGenresSection from './TheGenresSection';
import TheSynopsisSection from './TheSynopsisSection';
import TheCastSection from './TheCastSection';
import MovieAdSection from './MovieAdSection';
import SIZE_TYPES from 'utils/constants/size-types';
import withTheme from 'utils/hocs/withTheme';

const MovieInfo = ({
  theme,
  baseUrl,
  movie
}) => (
  <>
    <InfoWrapper>
      <Header
        size={SIZE_TYPES.LARGE}
        title={movie.title}
        subtitle={movie.tagline} />
      <BasicsSection
        className='basic-section-bottom-margin'
        voteAverage={movie.vote_average}
        spokenLanguages={movie.spoken_languages}
        runtime={movie.runtime}
        releaseDate={movie.release_date} />
      <TheGenresSection
        className='the-genres-section-bottom-margin'
        genres={movie.genres} />
      <TheSynopsisSection
        className='the-synopsis-section-bottom-margin'
        synopsis={movie.overview || 'There is no synopsis available...'} />
      <TheCastSection
        className='cast-section-bottom-margin'
        cast={movie.cast}
        baseUrl={baseUrl} />
      <MovieAdSection
        websiteUrl={movie.homepage}
        imdbId={movie.imdb_id}
        videos={movie.videos.results} />
    </InfoWrapper>
    <style jsx>{`
      :global(.basic-section-bottom-margin) {
        margin-bottom: 5rem;
      }

      :global(.the-genres-section-bottom-margin) {
        margin-bottom: 3rem;
      }

      :global(.the-synopsis-section-bottom-margin) {
        margin-bottom: 3rem;
      }

      :global(.cast-section-bottom-margin) {
        margin-bottom: 5rem;
      }

      @media ${theme.mediaQueries.smaller} {
        :global(.basic-section-bottom-margin) {
          margin-bottom: 3rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(MovieInfo);
