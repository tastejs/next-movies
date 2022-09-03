

import clsx from 'clsx';

import Image from 'components/Image';
import ImageLoadingPlaceholder from 'components/ImageLoadingPlaceholder';
import AspectRatioBox from 'components/UI/AspectRatioBox';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const CLASS_NAME = 'scenery';
const FLEX_CONTAINER_CLASS_NAME = 'flex-container';

const Scenery = ({
  overlayClass,
  className = '',
  width,
  height,
  fetchpriority,
  ...rest
}) => (
  <AspectRatioBox
    className={FLEX_CONTAINER_CLASS_NAME}
    aspectRatio={width / height}>
    <Image
      width={width}
      height={height}
      fetchpriority={fetchpriority}
      gradientOverlayEnabled
      overlayClass={overlayClass}
      className={clsx(CLASS_NAME, className)}
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH}
      alt='A poster'
      {...rest} />
    <style jsx>{`
      :global(.${CLASS_NAME}) {
        width: 100%;
        height: 100%;
      }
      /**
       * MEMO:
       * Center the loading spinner
       * Center the placeholder
       */
      :global(.${FLEX_CONTAINER_CLASS_NAME}) {
        display: flex;
        // MEMO: could avoid the following 3 lines
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      :global(.${FLEX_CONTAINER_CLASS_NAME} > *) {
        flex-grow: 1;
      }
    `}</style>
  </AspectRatioBox>
);

export default Scenery;
