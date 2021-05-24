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

import Image from 'components/Image';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { PROFILE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const PROFILE_WIDTH = 44;
const PROFILE_HEIGHT = 44;

const Profile = props => (
  <>
    <Image
      {...props}
      width={`${PROFILE_WIDTH}px`}
      height={`${PROFILE_HEIGHT}px`}
      className='center-profile profile-border-radius'
      loadingUI={
        // MEMO: reserve space for preventing layout shifting
        <div
          style={{
            width: `${PROFILE_WIDTH}px`,
            height: `${PROFILE_HEIGHT}px`
          }}
          className='loading-ui center-profile'>
          <LoadingSpinner />
        </div>
      }
      placeholderPath={PROFILE_PLACEHOLDER_IMAGE_PATH} />
    <style jsx>{`
      .loading-ui {
        display: flex;
        justify-cotent: center;
        align-items: center;
      }

      :global(.center-profile) {
        margin: 0 auto;
      }

      :global(.profile-border-radius) {
        border-radius: 50%;
      }
    `}</style>
  </>
);

export default Profile;
