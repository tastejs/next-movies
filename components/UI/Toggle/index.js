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

const Toggle = ({
  theme,
  id,
  checked,
  onChange
}) => (
  <>
    <span className='toggle'>
      <input
        className='toggle-track'
        type='checkbox'
        checked={checked}
        onChange={onChange}
        id={`toggle-track-${id}`} />
      <label
        style={{color: 'transparent'}}
        htmlFor={`toggle-track-${id}`}>
        Toggle Switch
      </label>
    </span>
    <style jsx>{`
      .toggle {
        position: relative;
        padding: 0 6px;
        display: flex;
        align-items: center;
      }

      input[type='checkbox'].toggle-track {
        width: 34px;
        height: 14px;
        opacity: 0.5;
        background-color: var(--palette-secondary-main);
        position: relative;
        border-radius: 7px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        vertical-align: 2px;
        outline: none;
      }

      input[type='checkbox'].toggle-track:checked + label {
        left: 20px;
      }
    
      input[type='checkbox'].toggle-track:focus-visible {
        outline: solid 2px white;
      }
    
      input[type='checkbox'].toggle-track + label {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
        cursor: pointer;
        position: absolute;
        left: 2px;
        background-color: var(--palette-secondary-main);
      }
    `}</style>
  </>
);

export default withTheme(Toggle);
