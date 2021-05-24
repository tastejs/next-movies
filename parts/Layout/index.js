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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from 'containers/Sidebar';
import AppHeader from 'containers/AppHeader';
import MyHead from 'components/MyHead';
import SearchBar from 'containers/SearchBar';
import DarkModeToggle from 'containers/DarkModeToggle';
import TheUser from 'containers/TheUser';
import MainWrapper from './MainWrapper';
import ContentWrapper from './ContentWrapper';
import init from 'actions/init';
import withTheme from 'utils/hocs/withTheme';
import { Media, MediaContextProvider } from 'utils/helpers/media';

const Layout = ({
  theme,
  children
}) => {
  // TODO: Client-side Rendering for now
  // RE: https://nextjs.org/learn/basics/data-fetching/two-forms
  // RE: https://nextjs.org/learn/basics/data-fetching/request-time
  // RE: https://nextjs.org/docs/basic-features/data-fetching
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <>
      <MyHead />
      {/**
       * TODO: it could be more efficient in using markups.
       * children is duplicated -> looks like it affects the performance (a little).
       * Could use SearchBar and DarkModeToggle just once by CSS tricks.
       * If we updated the layout (similar to the one in the Material Music project) from a designing perspective we could avoid duplicating children.
       */}
      <MediaContextProvider>
        <Media at='sm'>
          <MainWrapper theme={theme}>
            <AppHeader />
            <ContentWrapper theme={theme}>
              {children}
            </ContentWrapper>
          </MainWrapper>
        </Media>
        <Media greaterThan='sm'>
          <MainWrapper theme={theme}>
            <Sidebar />
            <div className='desktop-widgets-container'>
              <SearchBar id='desktop' />
              <DarkModeToggle
                id='desktop'
                className='left-margin' />
              <TheUser />
            </div>
            <style jsx>{`
              .desktop-widgets-container {
                position: absolute;
                top: 0;
                right: 0;
                padding: 2rem;
                display: flex;
                align-items: center;
              }

              .desktop-widgets-container > :global(*:not(:first-child)) {
                margin-left: 12px;
              }
            `}</style>
            <ContentWrapper theme={theme}>
              {children}
            </ContentWrapper>
          </MainWrapper>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default withTheme(Layout);
