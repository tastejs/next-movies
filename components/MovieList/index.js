

import MoviesGridContainer from './MoviesGridContainer';
import MovieListItem from './MovieListItem';
import Pagination from 'components/Pagination';
import withTheme from 'utils/hocs/withTheme';

const MovieList = ({
  theme,
  movies,
  baseUrl
}) => (
  <>
    <MoviesGridContainer theme={theme}>
      {movies.results.map(movie => (
        <MovieListItem
          theme={theme}
          key={movie.id}
          movie={movie}
          baseUrl={baseUrl} />
      ))}
    </MoviesGridContainer>
    <Pagination
      page={movies.page}
      totalPages={movies.total_pages} />
  </>
);

export default withTheme(MovieList);
