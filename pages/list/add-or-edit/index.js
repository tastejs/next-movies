

import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import PublicOrPrivateSelectSearch from 'parts/PublicOrPrivateSelectSearch';
import ListNavigation from 'containers/ListNavigation';
import TextInput from 'components/UI/TextInput';
import TextArea from 'components/UI/TextArea';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import withAuth from 'utils/hocs/withAuth';
import { YES_OR_NO_OPTIONS } from 'utils/constants/select-search';
import { TMDB_API_NEW_VERSION } from 'config/tmdb';
import useForm from 'utils/hooks/useForm';
import INPUT_NAMES from 'utils/constants/input-names';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

/**
 * TODO:
 * Should integrate authorization i.e. if this belongs to me.
 * Should handle `Invalid description` bug.
 * Should handle error state and show proper error message based on error state.
 * Could handle `sort_by` feature.
 */

const AddOrEdit = ({
  accountId,
  accessToken
}) => {
  const { query } = useRouter();
  const listId = query[QUERY_PARAMS.ID];

  const [editStatus, setEditStatus] = useState(STATUSES.IDLE);
  const [submitStatus, setSubmitStatus] = useState(STATUSES.IDLE);
  // TODO: could handle errors
  const [editError, setEditError] = useState(null);
  // const [addError, setAddError] = useState(null);

  useEffect(() => {
    // MEMO: check if there is no query parameter (list ID) which means ADD case
    if (Router.router.asPath === LINKS.ADD_OR_EDIT_LIST.HREF) {
      setEditStatus(STATUSES.RESOLVED);
    }
  }, []);

  const submitCallback = async () => {
    try {
      setSubmitStatus(STATUSES.PENDING);
      const body = {
        name: inputs[INPUT_NAMES.LIST_NAME],
        description: inputs[INPUT_NAMES.LIST_DESCRIPTION],
        // TODO: vulnerable
        public: inputs[INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST] === YES_OR_NO_OPTIONS[0].value,
        iso_639_1: 'en'
      };
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      // MEMO: Edit/Add case
      const response = listId
        ? await tmdbAPI.put(`/${TMDB_API_NEW_VERSION}/list/${listId}`, body, config)
        : await tmdbAPI.post(`/${TMDB_API_NEW_VERSION}/list`, body, config);

      setSubmitStatus(STATUSES.RESOLVED);

      // MEMO: Add case
      if (!listId) {
        const { id } = response.data;
        Router.push({
          query: {
            [QUERY_PARAMS.ID]: id
          }
        });
      }
    } catch (error) {
      console.log('[AddOrEdit submitCallback] error => ', error);
      setSubmitStatus(STATUSES.REJECTED);
      // setAddError(error);
    }
  };

  const {
    inputs,
    inputChangeHandler,
    updateInputsHandler,
    onSubmitHandler
  } = useForm({
    submitCallback,
    initialInputs: {
      [INPUT_NAMES.LIST_NAME]: '',
      [INPUT_NAMES.LIST_DESCRIPTION]: '',
      [INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST]: YES_OR_NO_OPTIONS[0].value
    }
  });

  const publicOrPrivateSelectHandler = newIsPublicList => {
    inputChangeHandler({
      target: {
        name: INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST,
        value: newIsPublicList
      }
    });
  };

  useEffect(() => {
    (async () => {
      if (!listId) return;
      if (!accessToken) return;
      if (!accountId) return;

      try {
        setEditStatus(STATUSES.PENDING);
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };
        const response = await tmdbAPI.get(`/${TMDB_API_NEW_VERSION}/list/${listId}`, config);
        const movies = response.data;
        if (movies.created_by.id === accountId) {
          updateInputsHandler({
            [INPUT_NAMES.LIST_NAME]: movies.name,
            [INPUT_NAMES.LIST_DESCRIPTION]: movies.description,
            // TODO: vulnerable
            [INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST]: movies.public.toString()
          });
        } else {
          throw new Error('You don\'t seem to have access to this page.');
        }
      } catch (error) {
        console.log('[Edit useEffect] error => ', error);
        setEditStatus(STATUSES.REJECTED);
        setEditError(error);
      }
    })();
  }, [listId, updateInputsHandler, accessToken, accountId]);

  const listName = inputs[INPUT_NAMES.LIST_NAME];

  useEffect(() => {
    if (!listName) return;

    setEditStatus(STATUSES.RESOLVED);
  }, [listName]);

  if (editStatus === STATUSES.IDLE || editStatus === STATUSES.PENDING) {
    return <Loader />;
  }

  if (editStatus === STATUSES.REJECTED) {
    // TODO: should show proper error message based on error state
    return (
      <NotFound
        title='Sorry!'
        subtitle={editError?.message ?? 'We can\'t find the page you\'re looking for...'} />
    );
  }

  if (editStatus === STATUSES.RESOLVED) {
    return (
      <>
        <Head>
          <title>{listId ? listName : 'Create New List: Step1'}</title>
        </Head>
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title={listId ? listName : 'Create New List: Step1'}
              subtitle='Edit' />
            <ListNavigation listId={listId} />
            <form onSubmit={onSubmitHandler}>
              <TextInput
                id='name'
                label='Name'
                name={INPUT_NAMES.LIST_NAME}
                value={inputs[INPUT_NAMES.LIST_NAME]}
                onChange={inputChangeHandler}
                required />
              <TextArea
                id='description'
                label='Description'
                name={INPUT_NAMES.LIST_DESCRIPTION}
                value={inputs[INPUT_NAMES.LIST_DESCRIPTION]}
                onChange={inputChangeHandler} />
              <PublicOrPrivateSelectSearch
                id='public-or-private-select'
                label='Public List?'
                name={INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST}
                value={inputs[INPUT_NAMES.PUBLIC_OR_PRIVATE_LIST]}
                onChange={publicOrPrivateSelectHandler}
                options={YES_OR_NO_OPTIONS} />
              <Button
                style={{
                  width: 138,
                  marginTop: 48
                }}
                loading={submitStatus === STATUSES.PENDING}
                contained
                type='submit'
                title={listId ? 'Save' : 'Continue'} />
            </form>
          </PaddingWrapper>
        </PageWrapper>
      </>
    );
  }
};

export default withAuth(AddOrEdit);
