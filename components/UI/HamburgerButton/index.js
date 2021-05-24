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

const Bar = withTheme(({ theme }) => (
  <>
    <span className='bar' />
    <style jsx>{`
      .bar {
        width: 100%;
        height: 4px;
        margin: 2px 0;
        border-radius: ${theme.shape.borderRadius}px;
        background-color: var(--palette-secondary-main);
      }
    `}</style>
  </>
));

const HamburgerButton = props => (
  <>
    <div className='hamburger-button' {...props}>
      <Bar />
      <Bar />
      <Bar />
    </div>
    <style jsx>{`
      .hamburger-button {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: space-around;
        width: 25px;
        line-height: 1;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default HamburgerButton;
