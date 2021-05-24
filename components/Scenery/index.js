/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  ...rest
}) => (
  <AspectRatioBox
    className={FLEX_CONTAINER_CLASS_NAME}
    aspectRatio={width / height}>
    <Image
      width={width}
      height={height}
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
