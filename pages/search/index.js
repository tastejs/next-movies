

import { useEffect } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import PageWrapper from 'parts/PageWrapper';
import NotFound from 'parts/NotFound';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import getSearchMovies from 'actions/getSearchMovies';
import clearMovies from 'actions/clearMovies';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';

const Search = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const { query } = useRouter();

  const searchTerm = query[QUERY_PARAMS.SEARCH_TERM];
  const page = Number(query[QUERY_PARAMS.PAGE]);

  useEffect(() => {
    return () => {
      dispatch(clearMovies());
    };
  }, [dispatch]);

  useEffect(() => {
    /**
     * RE: https://github.com/vercel/next.js/issues/8259
     * For example. https://github.com/vercel/next.js/issues/8259#issuecomment-650225962
     */
    if (checkEmptyObject(query)) return;

    const initialSearchTerm = Router.query[QUERY_PARAMS.SEARCH_TERM];
    const initialPage = Router.query[QUERY_PARAMS.PAGE];
 
    if (!initialPage) {
      const newPage = 1;
      const newSearchTerm = initialSearchTerm;
      console.log('[Search useEffect] query parameter update: newSearchTerm, newPage => ', newSearchTerm, newPage);
      Router.replace({
        pathname: LINKS.SEARCH.HREF,
        query: {
          [QUERY_PARAMS.SEARCH_TERM]: newSearchTerm,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    }
  }, [dispatch, query]);
  
  useEffect(() => {
    if (!searchTerm || !page) return;

    scroll.scrollToTop({smooth: true});

    dispatch(getSearchMovies(searchTerm, page));
  }, [searchTerm, page, dispatch]);

  if (movies.loading) {
    return <Loader />;
  } else if (movies.total_results === 0) {
    return (
      <NotFound
        title='Sorry!'
        subtitle={`There were no results for ${searchTerm}...`} />
    );
  } else {
    const { secure_base_url: baseUrl } = general.base.images;

    return (
      <PageWrapper>
        <PaddingWrapper>
          <Head>
            <title>{`${searchTerm} - Search Results`}</title>
          </Head>
          <Header
            title={searchTerm}
            subtitle='search results' />
          <MovieList
            movies={movies}
            baseUrl={baseUrl} />
        </PaddingWrapper>
      </PageWrapper>
    );
  }
};

export default Search;
