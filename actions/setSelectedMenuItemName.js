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

import * as TYPES from './types';

// Set the current selected menu item (discover or genre) if is valid
const setSelectedMenuItemName = name => dispatch => {
  if (!name) {
    dispatch({type: TYPES.UNSET_SELECTED_MENU_ITEM_NAME});
  } else {
    dispatch({
      type: TYPES.SET_SELECTED_MENU_ITEM_NAME,
      payload: name
    });
  }
};

export default setSelectedMenuItemName;
