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

import ButtonBase from './ButtonBase';

import LoadingSpinner from 'components/UI/LoadingSpinner';

const Button = ({
  title,
  startIcon,
  endIcon,
  disabled,
  loading,
  ...rest
}) => (
  <>
    <ButtonBase
      className='button'
      disabled={disabled || loading}
      {...rest}>
      <span className='button-label'>
        {startIcon && (
          <span
            style={{
              display: 'inherit',
              marginRight: '8px'
            }}>
            {startIcon}
          </span>
        )}
        {title}
        {endIcon && (
          <span
            style={{
              display: 'inherit',
              marginLeft: '8px'
            }}>
            {endIcon}
          </span>
        )}
      </span>
      {loading && (
        <LoadingSpinner
          className='loading-spinner'
          width={24}
          height={24} />
      )}
    </ButtonBase>
    <style jsx>{`
      .button-label {
        width: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
      }
      :global(.button) {
        position: relative;
      }
    `}</style>
  </>
);

export default Button;
