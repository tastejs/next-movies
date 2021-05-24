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

import Link from 'next/link';

import TextButton from 'components/UI/TextButton';
import DropdownMenu, { DropdownMenuItem } from 'components/UI/DropdownMenu';
import AccountCircleIconButton from 'components/IconButtons/AccountCircleIconButton';
import ExitToAppIconButton from 'components/IconButtons/ExitToAppIconButton';
import { useAuth } from 'utils/hocs/AuthProvider';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import COLOR_TYPES from 'utils/constants/color-types';

// TODO: <
/**
 * TODO:
 * Should use the avatar.
 */
// TODO: >

const TheUser = ({
  className,
  style
}) => {
  const {
    login,
    logout,
    isPending,
    isAuthenticated
  } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu
          align='right'
          DropElement={() => (
            <AccountCircleIconButton
              aria-label='User Profile'
              color={COLOR_TYPES.SECONDARY}
              className={className}
              style={style} />
          )}>
          <DropdownMenuItem>
            <Link href={{
              pathname: LINKS.ADD_OR_EDIT_LIST.HREF
            }}>
              <a>Create New List</a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={{
              pathname: LINKS.MY_LISTS.HREF,
              query: {
                [QUERY_PARAMS.PAGE]: 1
              }
            }}>
              <a>My Lists</a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TextButton
              style={{padding: 0}}
              onClick={logout}>
              Logout
            </TextButton>
          </DropdownMenuItem>
        </DropdownMenu>
      ) : (
        <ExitToAppIconButton
          aria-label='Log In'
          color={COLOR_TYPES.SECONDARY}
          className={className}
          style={style}
          loading={isPending}
          onClick={login} />
      )}
    </>
  );
};

export default TheUser;
