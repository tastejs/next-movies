

import SummaryWrapper from 'parts/SummaryWrapper';
import MovieArtwork from './MovieArtwork';
import { W780H1170 } from 'config/image-sizes';
import dynamic from 'next/dynamic';
const MovieInfo = dynamic(() => import('./MovieInfo'));

const MovieSummary = ({
  baseUrl,
  movie
}) => (
  <SummaryWrapper>
    <MovieArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={`${baseUrl}w${W780H1170.WIDTH}${movie.poster_path}`} />
    <MovieInfo
      baseUrl={baseUrl}
      movie={movie} />
  </SummaryWrapper>
);

export default MovieSummary;
