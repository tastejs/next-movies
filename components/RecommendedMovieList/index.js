
import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import { SCROLL_TO_ELEMENT } from 'utils/constants';

const RecommendedMovieList = ({
  recommendedMovies,
  baseUrl
}) => (
  <PaddingWrapper>
    <Element name={SCROLL_TO_ELEMENT}>
      <Header
        title='Recommended'
        subtitle='movies' />
    </Element>
    {recommendedMovies.loading ? (
      <Loader centerRow />
    ) : (
      recommendedMovies.total_results === 0 ? (
        <NotFound
          title='Sorry!'
          subtitle='There are no recommended movies...' />
      ) : (
        <MovieList
          movies={recommendedMovies}
          baseUrl={baseUrl} />
      )
    )}
  </PaddingWrapper>
);

export default RecommendedMovieList;
