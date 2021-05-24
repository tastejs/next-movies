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

import SummaryWrapper from 'parts/SummaryWrapper';
import PersonArtwork from './PersonArtwork';
import PersonInfo from './PersonInfo';
import { W780H1170 } from 'config/image-sizes';

const PersonSummary = ({
  baseUrl,
  person
}) => (
  <SummaryWrapper>
    <PersonArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={`${baseUrl}w${W780H1170.WIDTH}${person.profile_path}`} />
    <PersonInfo
      baseUrl={baseUrl}
      person={person} />
  </SummaryWrapper>
);

export default PersonSummary;
