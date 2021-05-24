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

import LoadingSpinner from 'components/UI/LoadingSpinner';
import withTheme from 'utils/hocs/withTheme';
import CLASS_NAMES from 'utils/constants/class-names';

const ImageLoadingPlaceholder = ({ theme }) => (
  <>
    <div className={CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER}>
      <LoadingSpinner />
    </div>
    <style jsx>{`
      .${CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER} {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        // TODO: no effect on aspect ratio box
        box-shadow: ${theme.shadows[1]};
      }
    `}</style>
  </>
);

export default withTheme(ImageLoadingPlaceholder);
