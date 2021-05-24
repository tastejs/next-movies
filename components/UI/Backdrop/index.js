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

const CLASS_NAME = 'backdrop';
const OPENED_CLASS_NAME = 'opened-backdrop';

const Backdrop = ({
  theme,
  className,
  opened,
  ...rest
}) => (
  <>
    <div
      className={
        clsx(
          CLASS_NAME,
          {[OPENED_CLASS_NAME]: opened},
          className
        )
      }
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        z-index: ${theme.zIndex.appBar + 1};
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        background-color: var(--palette-background-backdrop);
        -webkit-tap-highlight-color: transparent;
        transition: opacity ${theme.transitions.duration.leavingScreen}ms ${theme.transitions.easing.easeInOut} 0ms;
      }

      .${OPENED_CLASS_NAME} {
        visibility: visible;
        opacity: 1;
      }
    `}</style>
  </>
);

export default withTheme(Backdrop);
