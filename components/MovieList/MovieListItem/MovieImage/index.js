
import Image from 'components/Image';
import ImageLoadingPlaceholder from 'components/ImageLoadingPlaceholder';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const MovieImage = ({
  theme,
  gradientOverlayClass,
  className,
  ...rest
}) => (
  <>
    <Image
      {...rest}
      gradientOverlayEnabled
      gradientOverlayClass={gradientOverlayClass}
      className={`movie-image ${className}`}
      // TODO: prevent layout shifting
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH} />
    <style jsx>{`
      :global(.movie-image) {
        width: 100%;
        height: 38rem;
      }

      @media ${theme.mediaQueries.smaller} {
        :global(.movie-image) {
          height: 28rem;
        }
      }
    `}</style>
  </>
);

export default MovieImage;
