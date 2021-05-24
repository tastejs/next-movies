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

import { useState, useRef } from 'react';
import Router from 'next/router';

import Form from './Form';
import Input from './Input';
import MagnifierButton from './MagnifierButton';
import useClickAway from 'utils/hooks/useClickAway';
import LINKS from 'utils/constants/links';
import withTheme from 'utils/hocs/withTheme';
import QUERY_PARAMS from 'utils/constants/query-params';

const SearchBar = ({
  id,
  theme
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [opened, setOpened] = useState(false);
  const formRef = useRef();
  const inputRef = useRef();
  useClickAway(formRef, () => {
    setOpened(false);
  });

  const onFormSubmitHandler = event => {
    event.preventDefault();
    if (searchTerm.length === 0) {
      return;
    }
    // TODO: block for now as it breaks the smooth decreasing of the input
    // setSearchTerm('');
    setOpened(false);
    Router.push({
      pathname: LINKS.SEARCH.HREF,
      query: {
        [QUERY_PARAMS.SEARCH_TERM]: searchTerm,
        [QUERY_PARAMS.PAGE]: 1
      }
    });
  };

  const onFormClickHandler = () => {
    setOpened(true);
    inputRef.current.focus();
  };

  const onInputChangeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form
      opened={opened}
      theme={theme}
      ref={formRef}
      onClick={onFormClickHandler}
      onSubmit={onFormSubmitHandler}>
      <MagnifierButton
        type='submit'
        theme={theme}
        opened={opened} />
      <Input
        aria-label='Search Input'
        id={`search-input-${id}`}
        opened={opened}
        theme={theme}
        ref={inputRef}
        value={searchTerm}
        onChange={onInputChangeHandler}
        placeholder='Search for a movie...' />
    </Form>
  );
};

export default withTheme(SearchBar);
