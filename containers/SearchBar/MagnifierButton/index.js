
import SearchIcon from 'public/assets/svgs/icons/search.svg';

const MagnifierButton = ({
  opened,
  theme
}) => (
  <>
    <button
      className='magnifier-button'
      aria-label='Search for a movie'>
      {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#use-currentcolor-for-inline-svgs */}
      <SearchIcon
        fill='currentColor'
        width='1.125em' />
    </button>
    <style jsx>{`
      .magnifier-button {
        line-height: 0;
        pointer-events: ${opened ? 'auto' : 'none'};
        cursor: ${opened ? 'pointer' : 'none'};
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--palette-secondary-contrast-text);
      }
      
      @media ${theme.mediaQueries.large} {
        .magnifier-button {
          font-size: 1rem;
        }
      }
    `}</style>
  </>
);

export default MagnifierButton;
