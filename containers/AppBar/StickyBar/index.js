
import StickyBox from 'react-sticky-box';
import withTheme from 'utils/hocs/withTheme';

import SearchBar from 'components/SearchBar';
import HamburgerButton from 'components/UI/HamburgerButton';
import DarkModeToggle from 'components/DarkModeToggle';

const StickyBar = ({
  theme,
  openMenu
}) => (
  <>
    <StickyBox className='sticky-box'>
      <HamburgerButton onClick={openMenu} />
      <div className='sticky-bar-widgets-container'>
        <SearchBar />
        <DarkModeToggle />
      </div>
    </StickyBox>
    <style jsx>{`
      :global(.sticky-box) {
        display: flex;
        width: 100%;
        z-index: 999;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        background-color: var(--palette-primary-lighter);
        box-shadow: ${theme.shadows[4]};
      }
      
      .sticky-bar-widgets-container {
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
);

export default withTheme(StickyBar);
