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

import withTheme from 'utils/hocs/withTheme';

const PaddingWrapper = ({
  theme,
  children
}) => (
  <>
    <div className='padding-wrapper'>
      {children}
    </div>
    <style jsx>{`
      .padding-wrapper {
        padding-right: 4rem;
        padding-left: 4rem;
      }

      @media ${theme.mediaQueries.larger} {
        .padding-wrapper {
          padding-right: 3rem;
          padding-left: 3rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .padding-wrapper {
          padding-right: 2rem;
          padding-left: 2rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(PaddingWrapper);
