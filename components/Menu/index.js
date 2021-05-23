
import { useSelector } from 'react-redux';

import Logo from 'components/Logo';
import SectionHeading from './SectionHeading';
import MenuItem from './MenuItem';
import MenuItemLink from './MenuItemLink';
import Copyright from 'components/Copyright';
import TMDBMark from 'components/TMDBMark';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const renderStaticCategories = (staticCategories, selectedMenuItemName, closeMenu = null) => {
  const menuItemLinks = staticCategories.map(staticCategory => (
    <MenuItemLink
      key={staticCategory.id}
      href={{
        pathname: LINKS.HOME.HREF,
        query: {[QUERY_PARAMS.CATEGORY]: staticCategory.name}
      }}
      onClick={closeMenu}>
      <MenuItem
        title={staticCategory.name}
        selected={staticCategory.name === selectedMenuItemName} />
    </MenuItemLink>
  ));

  return menuItemLinks;
};

const renderGenres = (genres, selectedMenuItemName, closeMenu = null) => {
  const menuItemLinks = genres.map(genre => (
    <MenuItemLink
      key={genre.id}
      href={LINKS.GENRE.HREF}
      as={`${LINKS.GENRE.AS_PREFIX}/${genre.name}`}
      onClick={closeMenu}>
      <MenuItem
        title={genre.name}
        selected={genre.name === selectedMenuItemName} />
    </MenuItemLink>
  ));

  return menuItemLinks;
};

const Menu = ({
  isMobile,
  closeMenu
}) => {
  const staticCategories = useSelector(state => state.general.staticCategories);
  const genres = useSelector(state => state.general.genres);
  const selectedMenuItemName = useSelector(state => state.general.selectedMenuItemName);

  return (
    <>
      {!isMobile && <Logo />}
      <SectionHeading>Discover</SectionHeading>
      {renderStaticCategories(staticCategories, selectedMenuItemName, closeMenu)}
      <SectionHeading>Genres</SectionHeading>
      {renderGenres(genres, selectedMenuItemName, closeMenu)}
      <Copyright isMobile={isMobile} />
      <TMDBMark isMobile={isMobile} />
    </>
  );
};

export default Menu;
