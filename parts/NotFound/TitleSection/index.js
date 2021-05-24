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

const TitleSection = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <div className='title-section'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
    <style jsx>{`
      .title-section {
        text-align: center;
        margin-bottom: 6rem;
      }

      .title-section .title {
        color: var(--palette-text-primary);
        font-weight: ${theme.typography.fontWeightLight};
        font-size: 3.75rem;
      }

      .title-section .subtitle {
        color: var(--palette-text-secondary);
        font-weight: ${theme.typography.fontWeightBold};
        font-size: 2.125rem;
      }
    `}</style>
  </>
);

export default TitleSection;
