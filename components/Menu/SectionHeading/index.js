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

const SectionHeading = ({
  theme,
  children
}) => (
  <>
    <h2>
      {children}
    </h2>
    <style jsx>{`
      font-weight: ${theme.typography.fontWeightBold};
      font-size: 1.25rem;
      color: var(--palette-text-primary);
      text-transform: uppercase;
      letter-spacing: -0.5px;
      margin: 0 0 1rem 1rem;
      h2:not(:first-child) {
        margin-top: 4rem;
      }
    `}</style>
  </>
);

export default withTheme(SectionHeading);
