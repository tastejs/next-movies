
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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

const Movie = () => {
  const dispatch = useDispatch();
  const general = useSelector(state => state.general);
  const movie = useSelector(state => state.movie);
  const recommendedMovies = useSelector(state => state.recommendedMovies);
  const { query } = useRouter();

  const movieId = query[QUERY_PARAMS.ID];
  const page = query[QUERY_PARAMS.PAGE] || 1;

  useEffect(() => {
    scroll.scrollToTop({smooth: true, delay: 500});
    dispatch(getMovie(movieId));
    return () => dispatch(clearMovie());
  }, [movieId, dispatch]);

  useEffect(() => {
    dispatch(getRecommendedMovies(movieId, page));
    return () => dispatch(clearRecommendedMovies());
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
