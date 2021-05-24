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

import LoadingSpinner from 'components/UI/LoadingSpinner';
import withTheme from 'utils/hocs/withTheme';
import COLOR_TYPES from 'utils/constants/color-types';

const CLASS_NAME = 'icon-button-base';
const CLASS_NAME_WITH_NO_HOVER_EFFECT = `${CLASS_NAME}__no-hover-effect`;
const COLOR_PRIMARY_CLASS_NAME = `${CLASS_NAME}-colorPrimary`;
const COLOR_SECONDARY_CLASS_NAME = `${CLASS_NAME}-colorSecondary`;

// TODO: should follow the MUI practices
const IconButtonBase = ({
  theme,
  className,
  loading,
  disabled,
  children,
  withHoverEffect = true,
  color,
  ...rest
}) => (
  <>
    <button
      disabled={disabled || loading}
      className={
        clsx(
          withHoverEffect ? CLASS_NAME : CLASS_NAME_WITH_NO_HOVER_EFFECT,
          {[COLOR_PRIMARY_CLASS_NAME]: color === COLOR_TYPES.PRIMARY},
          {[COLOR_SECONDARY_CLASS_NAME]: color === COLOR_TYPES.SECONDARY},
          className
        )
      }
      {...rest}>
      {loading ? (
        <LoadingSpinner
          width={24}
          height={24} />
      ) : (
        <>
          {children}
        </>
      )}
    </button>
    <style jsx>{`
      .${CLASS_NAME}, .${CLASS_NAME_WITH_NO_HOVER_EFFECT} {
        color: var(--palette-text-primary);
        position: relative;
        cursor: pointer;
        padding: 12px;
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: transparent;
        fill: currentColor;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      
      .${CLASS_NAME}:hover:after {
        position: absolute;
        top: calc(50% - 50%);
        left: calc(50% - 50%);
        content: "";
        pointer-events: none;
        width: 100%;
        height: 100%;
        background-color: var(--palette-action-hover);
        border-radius: 50%;
        transition: background-color ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }

      .${COLOR_PRIMARY_CLASS_NAME} {
        color: var(--palette-primary-main);
      }

      .${COLOR_PRIMARY_CLASS_NAME}:hover:after {
        background-color: rgba(var(--palette-primary-main-rgb), var(--palette-action-hover-opacity));
      }

      .${COLOR_SECONDARY_CLASS_NAME} {
        color: var(--palette-secondary-main);
      }

      .${COLOR_SECONDARY_CLASS_NAME}:hover:after {
        background-color: rgba(var(--palette-secondary-main-rgb), var(--palette-action-hover-opacity));
      }
      
      button:disabled.${CLASS_NAME} {
        cursor: default;
      }
      
      button:disabled.${CLASS_NAME}:hover:after {
        display: none;
      }
    `}</style>
  </>
);

export default withTheme(IconButtonBase);
