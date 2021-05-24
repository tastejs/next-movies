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

import AppBar from 'components/UI/AppBar';
import HamburgerButton from 'components/UI/HamburgerButton';
import SearchBar from 'containers/SearchBar';
import DarkModeToggle from 'containers/DarkModeToggle';
import TheUser from 'containers/TheUser';

const BurgerHeader = ({ openMenu }) => (
  <>
    <AppBar>
      <HamburgerButton onClick={openMenu} />
      <div className='sticky-bar-widgets-container'>
        <SearchBar id='mobile' />
        <DarkModeToggle
          id='mobile'
          className='left-margin' />
        <TheUser />
      </div>
    </AppBar>
    <style jsx>{`
      .sticky-bar-widgets-container {
        display: flex;
        align-items: center;
      }

      .sticky-bar-widgets-container > :global(*:not(:first-child)) {
        margin-left: 8px;
      }
    `}</style>
  </>
);

export default BurgerHeader;
