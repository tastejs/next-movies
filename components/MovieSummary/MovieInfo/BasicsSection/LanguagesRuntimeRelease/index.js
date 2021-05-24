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

const getYear = date => {
  if (!date) {
    return;
  }
  const [year] = date.split('-');
  return year;
};

const renderInfo = (spokenLanguages, runtime, releaseDate) => {
  const pieces = [];
  if (spokenLanguages.length !== 0) {
    pieces.push(spokenLanguages[0].name);
  }
  pieces.push(runtime, releaseDate);

  return pieces
    .filter(element => element !== null)
    .map(element => (typeof element === 'number' ? `${element} min.` : element))
    .map((element, index, array) => (index !== array.length - 1 ? `${element} / ` : element));
};

const LanguagesRuntimeRelease = ({
  theme,
  spokenLanguages,
  runtime,
  releaseDate
}) => (
  <>
    <div className='languages-runtime-release'>
      {renderInfo(spokenLanguages, runtime, getYear(releaseDate))}
    </div>
    <style jsx>{`
      .languages-runtime-release {
        color: var(--palette-warning-main);
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 1;
        text-transform: uppercase;
      }
    `}</style>
  </>
);

export default withTheme(LanguagesRuntimeRelease);
