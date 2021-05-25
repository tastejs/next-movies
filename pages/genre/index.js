
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import SortBy from 'components/SortBy';
import setSelectedMenuItemName from 'actions/setSelectedMenuItemName';
import getGenreMovies from 'actions/getGenreMovies';
import clearMovies from 'actions/clearMovies';
import { SORT_BY_OPTIONS } from 'utils/constants/select-search';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';

const Genre = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const { query } = useRouter();
  const [sortByOptionValue, setSortByOptionValue] = useState(SORT_BY_OPTIONS[0].value);

  const genreId = query[QUERY_PARAMS.ID];
  const genreName = query[QUERY_PARAMS.NAME];
  const page = Number(query[QUERY_PARAMS.PAGE]);

  useEffect(() => {
    return () => {
      dispatch(setSelectedMenuItemName());
      dispatch(clearMovies());
    };
  }, [dispatch]);

  useEffect(() => {
    if (checkEmptyObject(query)) return;

    const initialGenreId = Router.query[QUERY_PARAMS.ID];
    const initialGenreName = Router.query[QUERY_PARAMS.NAME];
    const initialPage = Router.query[QUERY_PARAMS.PAGE];

    if (!initialPage) {
      const newGenreId = initialGenreId;
      const newGenreName = initialGenreName;
      const newPage = 1;
      console.log('[Genre useEffect] query parameter update: newGenreId, newGenreName, newPage => ', newGenreId, newGenreName, newPage);
      Router.replace({
        pathname: LINKS.GENRE.HREF,
        query: {
          [QUERY_PARAMS.ID]: newGenreId,
          [QUERY_PARAMS.NAME]: newGenreName,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    }
  }, [dispatch, query]);

  useEffect(() => {
    (async () => {
      if (!genreId || !genreName || !page || !sortByOptionValue) return;
      
      scroll.scrollToTop({smooth: true});

      await dispatch(setSelectedMenuItemName(genreName));
      dispatch(getGenreMovies(genreId, page, sortByOptionValue));
    })();
  }, [genreId, genreName, page, sortByOptionValue, dispatch]);

  if (movies.loading) {
    return <Loader />;
  }

  const { secure_base_url: baseUrl } = general.base.images;

  const sortByOptionValueOnChangeHandler = newSortByOptionValue => {
    setSortByOptionValue(newSortByOptionValue);
  };

  return (
    <PageWrapper>
      <PaddingWrapper>
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
      </PaddingWrapper>
    </PageWrapper>
  );
};

export default Genre;
