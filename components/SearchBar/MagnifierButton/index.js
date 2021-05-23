
import SearchIcon from 'public/assets/svgs/icons/search.svg';

const MagnifierButton = ({
  opened,
  theme
}) => (
  <>
    <button className='magnifier-button'>
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
        color: ${theme.palette.primary.contrastText};
      }
      
      @media ${theme.mediaQueries.large} {
        .magnifier-button {
          font-size: 1rem;
        }
      }
    
      @media ${theme.mediaQueries.small} {
        .magnifier-button {
          font-size: 0.8rem;
        }
      }
    `}</style>
  </>
);

export default MagnifierButton;
