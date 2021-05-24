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

import SelectSearch from 'react-select-search/dist/cjs';
import clsx from 'clsx';

import Label from 'components/UI/Label';
import FormControl from 'components/UI/FormControl';
import defaultClasses from 'components/UI/TheSelectSearch/default-style.module.css';

const TheSelectSearch = React.forwardRef(({
  id,
  name,
  label,
  classes,
  ...rest
}, ref) => (
  <>
    <FormControl>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectSearch
        ref={ref}
        className={key => clsx(defaultClasses?.[key], classes?.[key])}
        renderValue={valueProps => (
          <input
            id={id}
            name={name}
            className={clsx(defaultClasses?.['input'], classes?.['input'])}
            {...valueProps} />
        )}
        {...rest} />
    </FormControl>
  </>
));

export default TheSelectSearch;
