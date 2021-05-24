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

import Link from 'next/link';
import DotCircleIcon from 'public/assets/svgs/icons/dot-circle.svg';

import withTheme from 'utils/hocs/withTheme';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const GenreLink = ({
  theme,
  genre
}) => (
  <>
    <Link
      href={{
        pathname: LINKS.GENRE.HREF,
        query: {
          [QUERY_PARAMS.ID]: genre.id,
          [QUERY_PARAMS.NAME]: genre.name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <DotCircleIcon
          fill='currentColor'
          width='1.25em'
          style={{marginRight: '4px'}} />
        {genre.name}
      </a>
    </Link>
    <style jsx>{`
      a {
        display: flex;
        align-items: center;
        padding: 0.5rem 0rem;
        color: var(--palette-secondary-main);
        line-height: 1;
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightBold};
        text-transform: uppercase;
      }
    
      a:not(:last-child) {
        margin-right: 2rem;
      }
    
      a:hover {
        text-decoration: underline;
      }
    
      a:active {
        transform: translateY(2px);
      }
    `}</style>
  </>
);

export default withTheme(GenreLink);
