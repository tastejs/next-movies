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

import InfoWrapper from 'parts/InfoWrapper';
import Header from 'parts/Header';
import TheBiographySection from './TheBiographySection';
import PersonAdSection from './PersonAdSection';
import SIZE_TYPES from 'utils/constants/size-types';
import withTheme from 'utils/hocs/withTheme';

const renderSubtitle = (birthday, deathday) => {
  if (!birthday) {
    return null;
  } else if (birthday && deathday) {
    return `${birthday} - ${deathday}`;
  } else {
    return birthday;
  }
};

const PersonInfo = ({
  theme,
  person
}) => (
  <>
    <InfoWrapper>
      <Header
        className='header-bottom-margin'
        size={SIZE_TYPES.LARGE}
        title={person.name}
        subtitle={renderSubtitle(person.birthday, person.deathday)} />
      <TheBiographySection
        className='the-biography-section-bottom-margin'
        synopsis={person.biography || 'There is no biography available...'} />
      <PersonAdSection
        websiteUrl={person.homepage}
        imdbId={person.imdb_id} />
    </InfoWrapper>
    <style jsx>{`
      :global(.header-bottom-margin) {
        margin-bottom: 5rem !important;
      }

      :global(.the-biography-section-bottom-margin) {
        margin-bottom: 3rem;
      }

      @media ${theme.mediaQueries.smaller} {
        :global(.header-bottom-margin) {
          margin-bottom: 2.5rem !important;
        }
      }
    `}</style>
  </>
);

export default withTheme(PersonInfo);
