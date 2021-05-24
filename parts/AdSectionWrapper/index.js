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

import BackButton from 'components/BackButton';
import withTheme from 'utils/hocs/withTheme';

const AdSectionWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='ad-section-wrapper'>
      <div className='ad-section-wrapper-links'>
        {children}
      </div>
      <BackButton />
    </div>
    <style jsx>{`
      .ad-section-wrapper {
        display: flex;
        align-items: center;
      }

      .ad-section-wrapper-links {
        display: flex;
        margin-right: auto;
      }

      :global(.ad-section-wrapper-links > *:not(:last-child)) {
        margin-right: 2rem;
      }

      @media ${theme.mediaQueries.large} {
        :global(.ad-section-wrapper-links > *:not(:last-child)) {
          margin-right: 1rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(AdSectionWrapper);
