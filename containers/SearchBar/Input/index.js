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

const Input = React.forwardRef(({
  opened,
  theme,
  ...rest
}, ref) => (
  <>
    <input
      className='input'
      ref={ref}
      {...rest} />
    <style jsx>{`
      .input {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: ${theme.typography.fontWeightLight};
        background-color: transparent;
        width: 100%;
        margin-left: ${opened ? '1rem' : '0rem'};
        color: var(--palette-secondary-contrast-text);
        border: none;
        transition: margin-left ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
      }
    
      @media ${theme.mediaQueries.large} {
        .input {
          font-size: 1.25rem;
        }
      }

      @media ${theme.mediaQueries.medium} {
        .input {
          font-size: 1rem;
        }
      }
      @media ${theme.mediaQueries.small} {
        .input {
          font-size: 0.875rem;
        }
      }
    
      input:focus,
      input:active {
        outline: none;
      }

      input::placeholder {
        color: var(--palette-secondary-contrast-text);
      }
    `}</style>
  </>
));

export default Input;
