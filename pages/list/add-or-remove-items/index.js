

import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import List, { ListItem } from 'parts/List';
import MovieSelectSearch from 'parts/MovieSelectSearch';
import ListNavigation from 'containers/ListNavigation';
import Annotation from 'components/Annotation';
import CloseIconButton from 'components/IconButtons/CloseIconButton';
import Pagination from 'components/Pagination';
import Loader from 'components/UI/Loader';
import withAuth from 'utils/hocs/withAuth';
import { TMDB_API_NEW_VERSION, TMDB_PAGE_LIMIT } from 'config/tmdb';
import QUERY_PARAMS from 'utils/constants/query-params';
import { TMDB_MEDIA_TYPES } from 'utils/constants/tmdb';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

/**
 * TODO:
 * Should integrate authorization i.e. if this belongs to me.
 * Should throttle and debounce searching.
 * Should handle errors: https://github.com/axios/axios/issues/960 & https://github.com/axios/axios#handling-errors.
 * Should integrate a notification system to notify errors from the service.
 * Should explore a better approach rather than refetch approach.
 * Should handle error state and show proper error message based on error state. 
 * Should make disable the items that have been already added.
 * Could handle `comments` feature.
 */

const AddOrRemoveItems = ({
  accountId,
  accessToken
}) => {
  const { query } = useRouter();

  const [status, setStatus] = useState(STATUSES.IDLE);
  const [addItemStatus, setAddItemStatus] = useState(STATUSES.IDLE);
  const [removeItemStatus, setRemoveItemStatus] = useState({});
  // TODO: could handle errors
  const [error, setError] = useState(null);
  // const [addItemError, setAddItemError] = useState(STATUSES.IDLE);
  // const [removeItemError, setRemoveItemError] = useState({});

  const [movies, setMovies] = useState(null);

  const listId = query[QUERY_PARAMS.LIST_ID];
  const page = Number(query[QUERY_PARAMS.PAGE]);

  const loadMovies = async (page, listId, accessToken, accountId) => {
    const response = await tmdbAPI.get(`/${TMDB_API_NEW_VERSION}/list/${listId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        page
      }
    });
    const movies = response.data;
    if (movies.created_by.id === accountId) {
      setMovies(movies);
    } else {
      throw new Error('You don\'t seem to have access to this page.');
    }
  };

  useEffect(() => {
    (async () => {
      if (!page) return;
      if (!listId) return;
      if (!accessToken) return;
      if (!accountId) return;

      try {
        setStatus(STATUSES.PENDING);
        await loadMovies(page, listId, accessToken, accountId);
      } catch (error) {
        console.log('[AddOrRemoveItems useEffect] error => ', error);
        setStatus(STATUSES.REJECTED);
        setError(error);
      }
    })();
  }, [page, listId, accessToken, accountId]);

  useEffect(() => {
    if (!movies) return;

    setStatus(STATUSES.RESOLVED);
  }, [movies]);

  const addItemHandler = async newMediaId => {
    try {
      if (!page) return;
      if (!listId) return;
      if (!accessToken) return;

      const body = {
        items: [
          {
            media_type: TMDB_MEDIA_TYPES.MOVIE,
            media_id: newMediaId
          }
        ]
      };
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      setAddItemStatus(STATUSES.PENDING);
      await tmdbAPI.post(`/${TMDB_API_NEW_VERSION}/list/${listId}/items`, body, config);
      const expectedPage = Math.ceil((movies.total_results + 1) / TMDB_PAGE_LIMIT);
      if (expectedPage === page) {
        await loadMovies(page, listId, accessToken);
      } else {
        Router.push({
          query: {
            [QUERY_PARAMS.LIST_ID]: listId,
            [QUERY_PARAMS.PAGE]: expectedPage
          }
        });
      }
      setAddItemStatus(STATUSES.RESOLVED);
    } catch (error) {
      console.log('[AddOrRemoveItems addItemHandler] error => ', error);
      setAddItemStatus(STATUSES.REJECTED);
      // setAddItemError(error);
    }
  };

  const removeItemHandler = mediaId => async () => {
    try {
      /**
       * MEMO:
       * https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
       * https://github.com/axios/axios/issues/209
       */
      const headers = {
        'Authorization': `Bearer ${accessToken}`
      };
      const data = {
        items: [
          {
            media_type: TMDB_MEDIA_TYPES.MOVIE,
            media_id: mediaId
          }
        ]
      };

      setRemoveItemStatus(prevState => ({
        ...prevState,
        [mediaId]: STATUSES.PENDING
      }));
      
      await tmdbAPI.delete(`/${TMDB_API_NEW_VERSION}/list/${listId}/items`, {headers, data});

      setRemoveItemStatus(prevState => ({
        ...prevState,
        [mediaId]: STATUSES.RESOLVED
      }));

      setMovies(prevState => {
        const newResults = prevState.results.filter(result => result.id !== mediaId);
        const nextState = {
          ...prevState,
          results: newResults
        };

        return nextState;
      });
    } catch (error) {
      console.log('[AddOrRemoveItems removeItemHandler] error => ', error);
      setRemoveItemStatus(prevState => ({
        ...prevState,
        [mediaId]: STATUSES.REJECTED
      }));
      // setRemoveItemError(prevState => ({
      //   ...prevState,
      //   [mediaId]: error
      // }));
    }
  };

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
          <title>{movies.name}</title>
        </Head>
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title={movies.name}
              subtitle='Edit' />
            <ListNavigation listId={listId} />
            <MovieSelectSearch
              id='movie-search'
              label='Add Item'
              placeholder='Search for a movie...'
              onChange={addItemHandler} />
            {movies.results.length === 0 && page === 1 ? (
              <Annotation>
                There are no items added to this list.
              </Annotation>
            ) : (
              <List
                style={{
                  marginTop: 24,
                  marginBottom: 12
                }}>
                {movies.results.map(result => (
                  <ListItem key={result.id}>
                    {result.title}
                    <CloseIconButton
                      aria-label='Remove'
                      loading={removeItemStatus[result.id] === STATUSES.PENDING}
                      onClick={removeItemHandler(result.id)} />
                  </ListItem>
                ))}
              </List>
            )}
            <Annotation
              style={{
                visibility: addItemStatus === STATUSES.PENDING ? 'visible' : 'hidden',
                margin: '8px 0'
              }}>
              Adding an item to the list...
            </Annotation>
            <Pagination
              page={movies.page}
              totalPages={movies.total_pages} />
          </PaddingWrapper>
        </PageWrapper>
      </>
    );
  }
};

export default withAuth(AddOrRemoveItems);
