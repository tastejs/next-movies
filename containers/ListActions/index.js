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

import { useState } from 'react';
import Link from 'next/link';

import Modal from 'components/UI/Modal';
import Navbar, { NavbarItem } from 'components/UI/Navbar';
import TextButton from 'components/UI/TextButton';
import TextInput from 'components/UI/TextInput';
import { useAuth } from 'utils/hocs/AuthProvider';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const ListActions = ({
  listId,
  page,
  listName,
  creatorAccountId
}) => {
  const { accountId } = useAuth();

  const [shareModalOpened, setShareModalOpened] = useState(false);

  const openShareModalHandler = () => {
    setShareModalOpened(true);
  };

  const closeShareModalHandler = () => {
    setShareModalOpened(false);
  };

  const listActions = [
    {
      title: 'Edit',
      href: {
        pathname: LINKS.ADD_OR_EDIT_LIST.HREF,
        query: {[QUERY_PARAMS.ID]: listId}
      },
      invisible: creatorAccountId !== accountId
    },
    {
      title: 'Share',
      onClick: openShareModalHandler,
      invisible: false
    },
    {
      title: 'Add/Remove Items',
      href: {
        pathname: LINKS.ADD_OR_REMOVE_ITEMS_AT_LIST.HREF,
        query: {
          [QUERY_PARAMS.LIST_ID]: listId,
          [QUERY_PARAMS.PAGE]: 1
        }
      },
      invisible: creatorAccountId !== accountId
    },
    {
      title: 'Create New List',
      href: {
        pathname: LINKS.ADD_OR_EDIT_LIST.HREF
      },
      invisible: false
    }
  ];

  return (
    <>
      <Modal
        opened={shareModalOpened}
        onClose={closeShareModalHandler}
        title={`Share ${listName}`}
        body={
          <TextInput
            id='share-link'
            label='URL'
            defaultValue={
              `${typeof location !== 'undefined' ? location.origin : ''}/list?${[QUERY_PARAMS.ID]}=${listId}&${[QUERY_PARAMS.PAGE]}=${page}`
            }
            readOnly />
        } />
      <Navbar>
        {listActions.map(listAction => (
          <NavbarItem
            key={listAction.title}
            invisible={listAction.invisible}>
            {listAction.href ? (
              <Link
                href={listAction.href}>
                <a>
                  <TextButton style={{padding: 0}}>
                    {listAction.title}
                  </TextButton>
                </a>
              </Link>
            ) : (
              <a>
                <TextButton
                  style={{padding: 0}}
                  onClick={listAction.onClick}>
                  {listAction.title}
                </TextButton>
              </a>
            )}
          </NavbarItem>  
        ))}
      </Navbar>
    </>
  );
};

export default ListActions;
