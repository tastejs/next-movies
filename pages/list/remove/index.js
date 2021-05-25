
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import ActionsWrapper from 'parts/ActionsWrapper';
import ListNavigation from 'containers/ListNavigation';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import TextButton from 'components/UI/TextButton';
import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';
import Loader from 'components/UI/Loader';
import { TMDB_API_NEW_VERSION } from 'config/tmdb';
import withAuth from 'utils/hocs/withAuth';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

const Remove = ({
  accountId,
  accessToken
}) => {
  const { query } = useRouter();
  const listId = query[QUERY_PARAMS.ID];

  const [status, setStatus] = useState(STATUSES.IDLE);
  const [removeStatus, setRemoveStatus] = useState(STATUSES.IDLE);
  // TODO: could handle errors
  const [error, setError] = useState(null);
  // const [removeError, setRemoveError] = useState(null);
  const [removeModalOpened, setRemoveModalOpened] = useState(false);

  useEffect(() => {
    (async () => {
      if (!listId) return;
      if (!accessToken) return;
      if (!accountId) return;

      try {
        setStatus(STATUSES.PENDING);
        const response = await tmdbAPI.get(`/${TMDB_API_NEW_VERSION}/list/${listId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const movies = response.data;
        if (movies.created_by.id === accountId) {
          setStatus(STATUSES.RESOLVED);
        } else {
          throw new Error('You don\'t seem to have access to this page.');
        }
      } catch (error) {
        console.log('[Remove useEffect] error => ', error);
        setStatus(STATUSES.REJECTED);
        setError(error);
      }
    })();
  }, [listId, accessToken, accountId]);

  const openRemoveModalHandler = () => {
    setRemoveModalOpened(true);
  };

  const closeRemoveModalHandler = () => {
    setRemoveModalOpened(false);
  };

  const removeListHandler = async () => {
    try {
      closeRemoveModalHandler();

      const headers = {
        'Authorization': `Bearer ${accessToken}`
      };
      
      setRemoveStatus(STATUSES.PENDING);

      await tmdbAPI.delete(`/${TMDB_API_NEW_VERSION}/list/${listId}`, {headers});

      setRemoveStatus(STATUSES.RESOLVED);

      Router.push({
        pathname: LINKS.MY_LISTS.HREF,
        query: {
          [QUERY_PARAMS.PAGE]: 1
        }
      });
    } catch (error) {
      console.log('[Remove removeListHandler] error => ', error);
      setRemoveStatus(STATUSES.REJECTED);
      // setRemoveError(error);
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
          <title>Delete List</title>
        </Head>
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title='Delete List'
              subtitle='Edit' />
            <ListNavigation listId={listId} />
            <Modal
              opened={removeModalOpened}
              onClose={closeRemoveModalHandler}
              title='Are you sure?'
              body={<p>By clicking yes, this list will be permanently deleted.</p>}
              footer={
                <ActionsWrapper>
                  <TextButton onClick={closeRemoveModalHandler}>
                    No
                  </TextButton>
                  <TextButton onClick={removeListHandler}>
                    Yes
                  </TextButton>
                </ActionsWrapper>
              } />
            <FormControl>
              <Label htmlFor='delete-list-button'>
                Click the button below if you are sure you want to delete this list.
              </Label>
              <Button
                id='delete-list-button'
                loading={removeStatus === STATUSES.PENDING}
                contained
                title='Delete'
                onClick={openRemoveModalHandler} />
            </FormControl>
          </PaddingWrapper>
        </PageWrapper>
      </>
    );
  }
};

export default withAuth(Remove);
