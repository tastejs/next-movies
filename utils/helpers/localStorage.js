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

import { STORAGE_KEY } from 'config/app-level';

const saveState = state => {
  try {
    const prevSerializedState = loadState() || {};
    const nextSerializedState = JSON.stringify({
      ...prevSerializedState,
      ...state
    });
    localStorage.setItem(STORAGE_KEY, nextSerializedState);
  } catch (error) {
    console.warn(`Failed to save state to local storage: ${error.message}`);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (null === serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(`Failed to load state from local storage: ${error.message}`);
    return undefined;
  }
};

export {
  saveState,
  loadState
};
