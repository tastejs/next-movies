

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
