

import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import PageWrapper from 'parts/PageWrapper';
import Loader from 'components/UI/Loader';
import RecommendedMovieList from 'components/RecommendedMovieList';
import MovieSummary from 'components/MovieSummary';
import getMovie from 'actions/getMovie';
import getRecommendedMovies from 'actions/getRecommendedMovies';
import clearRecommendedMovies from 'actions/clearRecommendedMovies';
import clearMovie from 'actions/clearMovie';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';

const Movie = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movie = useSelector(state => state.movie);
  const recommendedMovies = useSelector(state => state.recommendedMovies);
  const { query } = useRouter();

  const movieId = query[QUERY_PARAMS.ID];
  const page = Number(query[QUERY_PARAMS.PAGE]);

  useEffect(() => {
    return () => {
      dispatch(clearMovie());
      dispatch(clearRecommendedMovies());
    };
  }, [dispatch]);

  useEffect(() => {
    if (checkEmptyObject(query)) return;

    const initialMovieId = Router.query[QUERY_PARAMS.ID];
    const initialPage = Router.query[QUERY_PARAMS.PAGE];

    if (!initialPage) {
      const newMovieId = initialMovieId;
      const newPage = 1;
      console.log('[Movie useEffect] query parameter update: newMovieId, newPage => ', newMovieId, newPage);
      Router.replace({
        pathname: LINKS.MOVIE.HREF,
        query: {
          [QUERY_PARAMS.ID]: newMovieId,
          [QUERY_PARAMS.PAGE]: newPage
        }
      });
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (!movieId) return;

    scroll.scrollToTop({smooth: true, delay: 500});
    
    dispatch(getMovie(movieId));
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!movieId || !page) return;
    dispatch(getRecommendedMovies(movieId, page));
  }, [movieId, page, dispatch]);

  if (movie.loading) {
    return <Loader />;
  }

  const { secure_base_url: baseUrl } = general.base.images;

  return (
    <PageWrapper>
      <Head>
        <title>{`${movie.title} - Movie Library`}</title>
      </Head>
      <MovieSummary
        baseUrl={baseUrl}
        movie={movie} />
      <RecommendedMovieList
        baseUrl={baseUrl}
        recommendedMovies={recommendedMovies} />
    </PageWrapper>
  );
};

export default Movie;
