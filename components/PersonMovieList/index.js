

import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import SortBy from 'components/SortBy';
import { SCROLL_TO_ELEMENT } from 'utils/constants';

const PersonMovieList = ({
  baseUrl,
  personMovies,
  sortByOptionValue,
  sortByOptionValueOnChange
}) => (
  <PaddingWrapper>
    <Element name={SCROLL_TO_ELEMENT}>
      <Header
        className='header-alignment'
        title='Also enters in'
        subtitle='movies' />
    </Element>
    {personMovies.loading ? (
      <Loader centerRow />
    ) : (
      personMovies.total_results === 0 ? (
        <NotFound
          title='Sorry!'
          subtitle='There are no more movies...' />
      ) : (
        <>
          <SortBy
            value={sortByOptionValue}
            onChange={sortByOptionValueOnChange} />
          <MovieList
            baseUrl={baseUrl}
            movies={personMovies} />
        </>
      )
    )}
  </PaddingWrapper>
);

export default PersonMovieList;
