

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import MyTMDBLists from 'components/MyTMDBLists';
import Loader from 'components/UI/Loader';
import withAuth from 'utils/hocs/withAuth';
import { TMDB_API_NEW_VERSION, TMDB_IMAGE_BASE_URL } from 'config/tmdb';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATUSES from 'utils/constants/statuses';
import tmdbAPI from 'services/tmdbAPI';

const MyLists = ({
  accountId,
  accessToken
}) => {
  const { query } = useRouter();

  const [status, setStatus] = useState(STATUSES.IDLE);
  // TODO: could handle errors
  const [error, setError] = useState(null);

  const [myLists, setMyLists] = useState(null);

  const page = Number(query[QUERY_PARAMS.PAGE]);

  useEffect(() => {
    (async () => {
      if (!page) return;
      if (!accountId) return;
      if (!accessToken) return;

      scroll.scrollToTop({smooth: true});

      try {
        setStatus(STATUSES.PENDING);
        const response = await tmdbAPI.get(`/${TMDB_API_NEW_VERSION}/account/${accountId}/lists`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
          params: {
            page
          }
        });
        const myLists = response.data;
        setMyLists(myLists);
      } catch (error) {
        console.log('[MyLists useEffect] error => ', error);
        setStatus(STATUSES.REJECTED);
        setError(error);
      }
    })();
  }, [page, accountId, accessToken]);

  useEffect(() => {
    if (!myLists) return;

    setStatus(STATUSES.RESOLVED);
  }, [myLists]);

  if (status === STATUSES.IDLE || status === STATUSES.PENDING) {
    return <Loader />;
  }

  if (status === STATUSES.REJECTED) {
    // TODO: should show proper error message based on error state
    return (
      <NotFound
        title='Sorry!'
        subtitle={error?.message ?? 'There were no my lists...'} />
    );
  }

  if (status === STATUSES.RESOLVED) {
    return (
      <>
        <Head>
          <title>My Lists</title>
        </Head>
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title='My Lists'
              subtitle='TMDB' />
            <MyTMDBLists
              myLists={myLists}
              baseUrl={TMDB_IMAGE_BASE_URL} />
          </PaddingWrapper>
        </PageWrapper>
      </>
    );
  }
};

export default withAuth(MyLists);
