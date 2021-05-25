
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
