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

import { useState, useCallback } from 'react';

const useForm = ({ submitCallback, initialInputs = {} } = {}) => {
  const [inputs, setInputs] = useState(initialInputs);

  const onSubmitHandler = useCallback(event => {
    event && event.preventDefault();
    submitCallback && submitCallback();
  }, [submitCallback]);

  const inputChangeHandler = useCallback(event => {
    event.persist && event.persist();
    setInputs(prevInputs => {
      const nextInputs = {
        ...prevInputs,
        [event.target.name]: event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.type === 'number'
            ? Number(event.target.value)
            : event.target.value
      };

      return nextInputs;
    });
  }, []);

  const updateInputsHandler = useCallback(newInputs => {
    setInputs(newInputs);
  }, []);

  return {
    onSubmitHandler,
    inputChangeHandler,
    inputs,
    updateInputsHandler
  };
};

export default useForm;
