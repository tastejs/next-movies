
import Link from 'next/link';

import TextButton from 'components/UI/TextButton';
import DropdownMenu, { DropdownMenuItem } from 'components/UI/DropdownMenu';
import AccountCircleIconButton from 'components/IconButtons/AccountCircleIconButton';
import ExitToAppIconButton from 'components/IconButtons/ExitToAppIconButton';
import { useAuth } from 'utils/hocs/AuthProvider';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import COLOR_TYPES from 'utils/constants/color-types';

/**
 * TODO:
 * Should use the avatar.
 */

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
