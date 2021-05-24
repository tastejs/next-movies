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

const DETAILS_PANEL_WRAPPER = 'details-panel-wrapper';

const DetailsPanelWrapper = ({
  theme,
  children
}) => (
  <>
    <div className={DETAILS_PANEL_WRAPPER}>
      {children}
    </div>
    <style jsx>{`
      .${DETAILS_PANEL_WRAPPER} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 3rem;
      }

      @media ${theme.mediaQueries.smaller} {
        .${DETAILS_PANEL_WRAPPER} {
          padding: 1.5rem 1.5rem;
        }
      }
    `}</style>
  </>
);

export default DetailsPanelWrapper;
