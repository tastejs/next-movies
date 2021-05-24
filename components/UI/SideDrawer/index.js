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

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';
import Backdrop from 'components/UI/Backdrop';

const SideDrawer = ({
  theme,
  opened,
  close,
  children
}) => (
  <>
    <Backdrop
      opened={opened}
      onClick={close} />
    <div className={clsx('side-drawer', opened ? 'opened' : 'closed')}>
      {children}
    </div>
    <style jsx>{`
      .side-drawer {
        position: fixed;
        width: 250px;
        max-width: 70%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: ${theme.zIndex.drawer};
        padding: 32px 16px;
        overflow-y: auto;
        box-sizing: border-box;
        transition: transform ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut};
        box-shadow: ${theme.shadows[16]};
        background-color: var(--palette-background-paper);
      }
    `}</style>
    <style jsx>{`
      .opened {
        transform: translateX(0);
      }
      
      .closed {
        transform: translateX(-100%)
      }
    `}</style>
  </>
);

export default withTheme(SideDrawer);
