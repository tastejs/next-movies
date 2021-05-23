
import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';

const RecommendedMovieList = ({
  recommendedMovies,
  baseUrl
}) => (
  <>
    <Header
      title='Recommended'
      subtitle='movies' />
    {recommendedMovies.loading ? (
      <Loader />
    ) : (
      recommendedMovies.total_results === 0 ? (
        <NotFound
          title='Sorry!'
          subtitle='There are no recommended movies...' />
      ) : (
        <Element name='scroll-to-element'>
          <MovieList
            movies={recommendedMovies}
            baseUrl={baseUrl} />
        </Element>
      )
    )}
  </>
);

export default RecommendedMovieList;
