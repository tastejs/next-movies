
import Image from 'components/Image';
import ImageLoadingPlaceholder from 'components/ImageLoadingPlaceholder';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const IntroImage = ({
  className,
  ...rest
}) => (
  <>
    <Image
      {...rest}
      gradientOverlayEnabled
      // TODO: prevent layout shifting
      className={`intro-image ${className}`}
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH} />
    <style jsx>{`
      :global(.intro-image) {
        max-height: 100%;
        max-width: 100%;
      }
    `}</style>
  </>
);

export default IntroImage;
