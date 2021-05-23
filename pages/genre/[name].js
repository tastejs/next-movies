
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import SortBy from 'components/SortBy';
import setSelectedMenuItemName from 'actions/setSelectedMenuItemName';
import getGenreMovies from 'actions/getGenreMovies';
import clearMovies from 'actions/clearMovies';
import PageWrapper from 'parts/PageWrapper';
import SORT_BY_OPTIONS from 'utils/constants/sort-by-options';
import QUERY_PARAMS from 'utils/constants/query-params';

const Genre = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const { query } = useRouter();
  const [sortByOptionValue, setSortByOptionValue] = useState(SORT_BY_OPTIONS[0].value);

  const genreName = query[QUERY_PARAMS.NAME];
  const page = query[QUERY_PARAMS.PAGE] || 1;

  useEffect(() => {
    dispatch(setSelectedMenuItemName(genreName));
    return () => dispatch(setSelectedMenuItemName());
  }, [genreName, dispatch]);

  useEffect(() => {
    scroll.scrollToTop({smooth: true});
    dispatch(getGenreMovies(genreName, page, sortByOptionValue));
    return () => dispatch(clearMovies());
  }, [genreName, page, sortByOptionValue, dispatch]);

  if (movies.loading) {
    return <Loader />;
  }

  const { secure_base_url: baseUrl } = general.base.images;

  const sortByOptionValueOnChangeHandler = newSortByOptionValue => {
    setSortByOptionValue(newSortByOptionValue);
  };

  return (
    <PageWrapper>
      <Head>
        <title>{`${general.selectedMenuItemName} Movies`}</title>
      </Head>
      <Header
        title={general.selectedMenuItemName}
        subtitle='movies' />
      <SortBy
        value={sortByOptionValue}
        onChange={sortByOptionValueOnChangeHandler} />
      <MovieList
        movies={movies}
        baseUrl={baseUrl} />
    </PageWrapper>
  );
};

export default Genre;
