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

import LazyLoad from 'react-lazyload';

import withTheme from 'utils/hocs/withTheme';

const SummaryWrapper = ({
  theme,
  children
}) => (
  <>
    {/* TODO: double check if we really need LazyLoad */}
    <LazyLoad height={500}>
      <div className='summary-wrapper'>
        {children}
      </div>
    </LazyLoad>
    <style jsx>{`
      .summary-wrapper {
        display: grid;
        grid-template-columns: 40% 60%;
        max-width: 120rem;
        margin: 0 auto;
        margin-bottom: 7rem;
      }

      @media ${theme.mediaQueries.largest} {
        .summary-wrapper {
          max-width: 105rem;
        }
      }

      @media ${theme.mediaQueries.larger} {
        .summary-wrapper {
          max-width: 110rem;
          margin-bottom: 6rem;
        }
      }

      @media ${theme.mediaQueries.large} {
        .summary-wrapper {
          max-width: 110rem;
          margin-bottom: 5rem;
        }
      }

      @media ${theme.mediaQueries.medium} {
        .summary-wrapper {
          display: block;
          grid-template-columns: unset;
          margin-bottom: 5rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(SummaryWrapper);
