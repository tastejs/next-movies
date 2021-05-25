

import clsx from 'clsx';

import Image from 'components/Image';
import ImageLoadingPlaceholder from 'components/ImageLoadingPlaceholder';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const IntroImage = ({
  className,
  ...rest
}) => (
  <>
    <Image
      gradientOverlayEnabled
      className={clsx('intro-image', className)}
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH}
      {...rest} />
    <style jsx>{`
      :global(.intro-image) {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </>
);

export default IntroImage;
