
import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import SortBy from 'components/SortBy';

const PersonMovieList = ({
  baseUrl,
  personMovies,
  sortByOptionValue,
  sortByOptionValueOnChange
}) => (
  <>
    <Header
      title='Also enters in'
      subtitle='movies' />
    {personMovies.loading ? (
      <Loader />
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
          <Element name='scroll-to-element'>
            <MovieList
              baseUrl={baseUrl}
              movies={personMovies} />
          </Element>
        </>
      )
    )}
  </>
);

export default PersonMovieList;
