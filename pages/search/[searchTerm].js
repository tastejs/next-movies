
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import getSearchMovies from 'actions/getSearchMovies';
import clearMovies from 'actions/clearMovies';
import PageWrapper from 'parts/PageWrapper';
import NotFound from 'parts/NotFound';
import QUERY_PARAMS from 'utils/constants/query-params';

const Search = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const { query } = useRouter();

  const searchTerm = query[QUERY_PARAMS.SEARCH_TERM];
  const page = query[QUERY_PARAMS.PAGE] || 1;

  useEffect(() => {
    scroll.scrollToTop({smooth: true});
    dispatch(getSearchMovies(searchTerm, page));
    return () => dispatch(clearMovies());
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
        <Head>
          <title>{`${searchTerm} - Search Results`}</title>
        </Head>
        <Header
          title={searchTerm}
          subtitle='search results' />
        <MovieList
          movies={movies}
          baseUrl={baseUrl} />
      </PageWrapper>
    );
  }
};

export default Search;
