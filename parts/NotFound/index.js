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

import PageWrapper from 'parts/PageWrapper';
import TitleSection from './TitleSection';
import NotFoundImage from './NotFoundImage';
import LinkButton from 'components/LinkButton';
import LINKS from 'utils/constants/links';
import withTheme from 'utils/hocs/withTheme';
import HomeIcon from 'public/assets/svgs/icons/home.svg';
import QUERY_PARAMS from 'utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const NotFound = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <PageWrapper className='not-found'>
      <TitleSection
        theme={theme}
        title={title}
        subtitle={subtitle} />
      <NotFoundImage
        src='/assets/svgs/empty.svg'
        alt='Not found!' />
      <LinkButton
        href={{
          pathname: LINKS.HOME.HREF,
          query: {
            [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
            [QUERY_PARAMS.PAGE]: 1
          }
        }}
        buttonProps={{
          contained: true,
          title: 'Home',
          startIcon: (
            <HomeIcon
              fill='currentColor'
              width='1.125em' />
          )
        }} />
    </PageWrapper>
    <style jsx>{`
      :global(.not-found) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media ${theme.mediaQueries.medium} {
        :global(.not-found) {
          width: 65%;
        }
      }
    `}</style>
  </>
);

export default withTheme(NotFound);
