
import { useState } from 'react';

import StickyBar from './StickyBar';
import BurgerMenu from './BurgerMenu';

const AppBar = () => {
  const [opened, setOpened] = useState(false);

  const onStateChangeHandler = state => {
    if (!state.isOpened) {
      setOpened(state.isOpened);
    }
  };

  const openMenuHandler = () => {
    setOpened(true);
  };

  const closeMenuHandler = () => {
    setOpened(false);
  };

  return (
    <>
      <StickyBar openMenu={openMenuHandler} />
      <BurgerMenu
        opened={opened}
        closeMenu={closeMenuHandler}
        onStateChange={onStateChangeHandler} />
    </>
  );
};

export default AppBar;
