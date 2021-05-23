
import { slide as ReactBurgerMenu } from 'react-burger-menu';

import Menu from 'components/Menu';

const menuOverrideStyles = {
  bmBurgerButton: {
    display: 'none'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    marginRight: '1rem'
  },
  bmCross: {
    backgroundColor: 'var(--palette-text-primary)'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0
  },
  bmMenu: {
    backgroundColor: 'var(--palette-background-paper)',
    overflowY: 'scroll',
    padding: '2.5em 1.5em'
  },
  bmItemList: {
    padding: '0.8rem'
  },
  bmItem: {
    outline: 'none'
  },
  bmOverlay: {
    top: 0,
    background: 'var(--palette-background-backdrop)'
  }
};

const BurgerMenu = ({
  opened,
  closeMenu,
  onStateChange
}) => (
  <ReactBurgerMenu
    isOpen={opened}
    onStateChange={onStateChange}
    styles={menuOverrideStyles}>
    <Menu
      isMobile
      closeMenu={closeMenu} />
  </ReactBurgerMenu>
);

export default BurgerMenu;
