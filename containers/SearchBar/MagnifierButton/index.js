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

import SearchIcon from 'public/assets/svgs/icons/search.svg';

const MagnifierButton = ({
  opened,
  theme
}) => (
  <>
    <button
      className='magnifier-button'
      aria-label='Search for a movie'>
      {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#use-currentcolor-for-inline-svgs */}
      <SearchIcon
        fill='currentColor'
        width='1.125em' />
    </button>
    <style jsx>{`
      .magnifier-button {
        line-height: 0;
        pointer-events: ${opened ? 'auto' : 'none'};
        cursor: ${opened ? 'pointer' : 'none'};
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--palette-secondary-contrast-text);
      }
      
      @media ${theme.mediaQueries.large} {
        .magnifier-button {
          font-size: 1rem;
        }
      }
    `}</style>
  </>
);

export default MagnifierButton;
