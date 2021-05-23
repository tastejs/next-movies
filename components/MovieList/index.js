
import GridContainer from './GridContainer';
import MovieListItem from './MovieListItem';
import Pagination from 'components/Pagination';
import withTheme from 'utils/hocs/withTheme';

const MovieList = ({
  theme,
  movies,
  baseUrl
}) => (
  <>
    {movies?.results?.length > 0 && (
      <>
        <GridContainer theme={theme}>
          {movies.results.map(movie => (
            <MovieListItem
              theme={theme}
              key={movie.id}
              movie={movie}
              baseUrl={baseUrl} />
          ))}
        </GridContainer>
        <Pagination
          page={movies.page}
          totalPages={movies.total_pages} />
      </>
    )}
  </>
);

export default withTheme(MovieList);
