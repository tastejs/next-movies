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

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import ListActions from 'containers/ListActions';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import { useAuth } from 'utils/hocs/AuthProvider';
import { TMDB_API_NEW_VERSION, TMDB_IMAGE_BASE_URL } from 'config/tmdb';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

// TODO: <
/**
 * TODO:
 * Should integrate authorization i.e. `public` | `private` list.
 * Should show the author's gravatar next to ListActions.
 * Should add Google license text to every new file.
 * Should handle error state and show proper error message based on error state. RE: https://github.com/addyosmani/launch/issues/14#issuecomment-723718803
 * Could show a hero image using the `backdrop_path` value.
 * Could handle `sort_by` feature.
 * Could handle `comments` feature.
 */
// TODO: >

const List = () => {
  const { query } = useRouter();

  const { accessToken } = useAuth();

  const [status, setStatus] = useState(STATUSES.IDLE);
  // TODO: could handle errors
  const [error, setError] = useState(null);

  const [movies, setMovies] = useState(null);

  const page = Number(query[QUERY_PARAMS.PAGE]);
  const listId = query[QUERY_PARAMS.ID];

  useEffect(() => {
    (async () => {
      if (!page) return;
      if (!listId) return;

      scroll.scrollToTop({smooth: true});

      try {
        setStatus(STATUSES.PENDING);
        const headers = accessToken ? {
          'Authorization': `Bearer ${accessToken}`
        } : {};

        const response = await tmdbAPI.get(`/${TMDB_API_NEW_VERSION}/list/${listId}`, {
          headers,
          params: {
            page
          }
        });
        const movies = response.data;
        setMovies(movies);
      } catch (error) {
        console.log('[List useEffect] error => ', error);
        setStatus(STATUSES.REJECTED);
        setError(error);
      }
    })();
  }, [page, listId, accessToken]);

  useEffect(() => {
    if (!movies) return;

    setStatus(STATUSES.RESOLVED);
  }, [movies]);

  if (status === STATUSES.IDLE || status === STATUSES.PENDING) {
    return <Loader />;
  }

  if (status === STATUSES.REJECTED) {
    // TODO: should show proper error message based on error state
    return (
      <NotFound
        title='Sorry!'
        subtitle={error?.message ?? 'We can\'t find the page you\'re looking for...'} />
    );
  }

  if (status === STATUSES.RESOLVED) {
    return (
      <>
        <Head>
          <title>{movies.name ?? 'List'}</title>
        </Head>
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title={movies.name ?? 'No name'}
              subtitle={movies.description ?? 'No description'} />
            <ListActions
              listId={listId}
              page={page}
              listName={movies.name}
              creatorAccountId={movies?.created_by?.id} />
            {movies.total_results === 0 ? (
              <NotFound
                title='Sorry!'
                subtitle='There were no items...' />
            ) : (
              <MovieList
                movies={movies}
                baseUrl={TMDB_IMAGE_BASE_URL} />
            )}
          </PaddingWrapper>
        </PageWrapper>
      </>
    );
  }
};

export default List;
