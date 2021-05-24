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
