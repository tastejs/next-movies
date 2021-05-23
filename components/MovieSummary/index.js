
import SummaryWrapper from 'parts/SummaryWrapper';
import MovieArtwork from './MovieArtwork';
import MovieInfo from './MovieInfo';

const MovieSummary = ({
  baseUrl,
  movie
}) => (
  <SummaryWrapper>
    <MovieArtwork
      // TODO: hardcoded size
      src={`${baseUrl}w780${movie.poster_path}`} />
    <MovieInfo
      baseUrl={baseUrl}
      movie={movie} />
  </SummaryWrapper>
);

export default MovieSummary;
