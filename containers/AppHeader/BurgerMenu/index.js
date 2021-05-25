
import SideDrawer from 'components/UI/SideDrawer';
import LazyMenu from 'parts/LazyMenu';

const BurgerMenu = ({
  opened,
  closeMenu
}) => (
  <SideDrawer
    opened={opened}
    close={closeMenu}>
    {opened && (
      <LazyMenu
        isMobile
        closeMenu={closeMenu} />
    )}
  </SideDrawer>
);

export default BurgerMenu;
