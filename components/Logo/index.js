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

import LINKS from 'utils/constants/links';
import { LOGO_IMAGE_PATH } from 'utils/constants/image-paths';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const Logo = () => (
  <>
    <Link
      href={{
        pathname: LINKS.HOME.HREF,
        query: {
          [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <picture>
          <source srcSet={LOGO_IMAGE_PATH} media='(min-width: 80em)' />
          <img
            className='logo-img'
            width='150'
            height='150'
            src=''
            alt='movie ticket' />
        </picture>
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 100%;
        height: 18rem;
        display: grid;
        place-items: center;
        margin-bottom: 2rem;
      }

      .logo-img {
        max-width: 75%;
      }
    `}</style>
  </>
);

export default Logo;
