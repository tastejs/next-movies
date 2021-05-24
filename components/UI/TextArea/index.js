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

import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';

const TextArea = ({
  id = 'text-area',
  label,
  ...rest
}) => (
  <FormControl>
    {label && <Label htmlFor={id}>{label}</Label>}
    <textarea
      id={id}
      {...rest} />
    <style jsx>{`
      textarea {
        width: 100%;
        height: 150px;
        padding: 12px 16px;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        font-family: inherit;
        box-sizing: border-box;
        border: 1px solid var(--palette-divider);
        transition: color var(--duration) var(--timing), background-color var(--duration) var(--timing);
        outline: none;
        background-color: var(--palette-background-paper);
        resize: none;
      }
    `}</style>
  </FormControl>
);

export default TextArea;
