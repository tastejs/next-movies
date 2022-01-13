/**
 * TODO:
 * https://nextjs.org/blog/next-9#automatic-partial-static-export RE: https://github.com/vercel/next.js/discussions/10874
 * Should have API abort logic when components being unmounted to avoid memory leak.
 * Should use finite states model instead of boolean loading state (at /index, /genre, /movie, /person, and /search pages).
 * Should double-check if `react-scroll` is working as expected and fix.
 */

import { useEffect } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import Header from 'parts/Header';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import setSelectedMenuItemName from 'actions/setSelectedMenuItemName';
import getStaticCategoryMovies from 'actions/getStaticCategoryMovies';
import clearMovies from 'actions/clearMovies';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';
import { TMDB_API_KEY, TMDB_API_BASE_URL, TMDB_API_VERSION } from 'config/tmdb';

const Home = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movies = useSelector(state => state.movies);
  const { query } = useRouter();

  const categoryName = query[QUERY_PARAMS.CATEGORY];
  const page = Number(query[QUERY_PARAMS.PAGE]);
  
  useEffect(() => {
    return () => {
      dispatch(setSelectedMenuItemName());
      dispatch(clearMovies());
    };
  }, [dispatch]);

  useEffect(() => {
    // MEMO: check if query parsing has finished
    if (Router.router.asPath !== LINKS.HOME.HREF && checkEmptyObject(query)) return;

    const initialCategoryName = Router.query[QUERY_PARAMS.CATEGORY];
    const initialPage = Router.query[QUERY_PARAMS.PAGE];

    if (!initialCategoryName && !initialPage) {
      const newCategoryName = STATIC_MOVIE_CATEGORIES[0].name;
      const newPage = 1;
      console.log('[Home useEffect - no initial category name & no initial page] query parameter update: newCategoryName, newPage => ', newCategoryName, newPage);
      Router.replace({
        query: {
          [QUERY_PARAMS.CATEGORY]: newCategoryName,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    } else if (!initialCategoryName && initialPage) {
      const newCategoryName = STATIC_MOVIE_CATEGORIES[0].name;
      const newPage = initialPage;
      console.log('[Home useEffect - no initial category name] query parameter update: newCategoryName, newPage => ', newCategoryName, newPage);
      Router.replace({
        query: {
          [QUERY_PARAMS.CATEGORY]: newCategoryName,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    } else if (initialCategoryName && !initialPage) {
      const newCategoryName = initialCategoryName;
      const newPage = 1;
      console.log('[Home useEffect - no initial page] query parameter update: newCategoryName, newPage => ', newCategoryName, newPage);
      Router.replace({
        query: {
          [QUERY_PARAMS.CATEGORY]: newCategoryName,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    } else {
      console.log('[Home useEffect - initial category name and initial page] no query parameter update');
    }
  }, [dispatch, query]);

  useEffect(() => {
    (async () => {
      if (!categoryName || !page) return;

      scroll.scrollToTop({smooth: true});
      
      await dispatch(setSelectedMenuItemName(categoryName));
      dispatch(getStaticCategoryMovies(categoryName, page));
    })();
  }, [categoryName, page, dispatch]);

  const { secure_base_url: baseUrl } = general.base.images;

  return (
    <>
      <Head>
        {/* MEMO: inspired by https://addyosmani.com/blog/preload-hero-images/ */}
        <link
          rel='preload'
          as='fetch'
          // TODO: page is hardcoded
          href={`${TMDB_API_BASE_URL}/${TMDB_API_VERSION}/movie/popular?api_key=${TMDB_API_KEY}&page=1`}
          crossOrigin='true' />
        <title>{`${general.selectedMenuItemName} Movies`}</title>
      </Head>
      {movies.loading ? (
        <Loader />
      ) : (
        <PageWrapper>
          <PaddingWrapper>
            <Header
              title={general.selectedMenuItemName}
              subtitle='movies' />
            <MovieList
              movies={movies}
              baseUrl={baseUrl} />
          </PaddingWrapper>
        </PageWrapper>
      )}
    </>
  );
};

export default Home;
