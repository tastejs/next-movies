

import { useState } from 'react';

import BurgerHeader from './BurgerHeader';
import BurgerMenu from './BurgerMenu';

const AppHeader = ({ className }) => {
  const [opened, setOpened] = useState(false);

  const openMenuHandler = () => {
    setOpened(true);
  };

  const closeMenuHandler = () => {
    setOpened(false);
  };

  return (
    <div className={className}>
      <BurgerHeader openMenu={openMenuHandler} />
      <BurgerMenu
        opened={opened}
        closeMenu={closeMenuHandler} />
    </div>
  );
};

export default AppHeader;
