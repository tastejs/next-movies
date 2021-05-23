
import LazyLoad from 'react-lazyload';

import MovieLink from './MovieLink';
import MovieImage from './MovieImage';
import DetailsPanelWrapper from './DetailsPanelWrapper';
import MovieTitle from './MovieTitle';
import RatingInfo from './RatingInfo';
import LINKS from 'utils/constants/links';

const MovieListItem = ({
  theme,
  movie,
  baseUrl
}) => (
  <>
    <LazyLoad
      height={200}
      offset={200}>
      <MovieLink
        className='movie-link-inner-wrapper'
        href={LINKS.MOVIE.HREF}
        as={`${LINKS.MOVIE.AS_PREFIX}/${movie.id}`}>
        <MovieImage
          theme={theme}
          className='movie-image-border-radius movie-image-box-shadow'
          // TODO: hardcoded size
          src={`${baseUrl}w342${movie.poster_path}`} />
        <DetailsPanelWrapper theme={theme}>
          <MovieTitle className='movie-title-color'>{movie.title}</MovieTitle>
          <RatingInfo
            className='rating-info-color'
            voteAverage={movie.vote_average}
            tooltip={`${movie.vote_average} average rating on ${movie.vote_count} votes`} />
        </DetailsPanelWrapper>
      </MovieLink>
    </LazyLoad>
    <style jsx>{`
      :global(.movie-link-inner-wrapper:hover .image-loading-placeholder) {
        box-shadow: ${theme.shadows[0]};
        border-radius: 0;
      }

      :global(.movie-link-inner-wrapper:hover .movie-title-color) {
        color: var(--palette-text-primary);
      }

      :global(.movie-link-inner-wrapper:hover .rating-info-color) {
        color: var(--palette-primary-lighter);
      }
    `}</style>
  </>
);

export default MovieListItem;
