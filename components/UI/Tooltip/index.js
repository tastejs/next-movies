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

// MEMO: could follow the MUI practices https://material-ui.com/components/tooltips/
const Tooltip = ({
  theme,
  className,
  children,
  ...rest
}) => (
  <>
    <span
      className={clsx('tooltip', className)}
      {...rest}>
      {children}
    </span>
    <style jsx>{`
      .tooltip {
        visibility: hidden;
        width: 120px;
        font-weight: ${theme.typography.fontWeightMedium};
        font-size: 1.25rem;
        background-color: var(--palette-primary-light);
        color: var(--palette-primary-contrast-text);
        text-align: center;
        border-radius: ${theme.shape.borderRadius}px;
        padding: 1rem;
        z-index: ${theme.zIndex.tooltip};
        transition: visibility ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
      }
      
      .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: var(--palette-primary-light) transparent transparent transparent;
      }
    `}</style>
  </>
);

export default withTheme(Tooltip);
