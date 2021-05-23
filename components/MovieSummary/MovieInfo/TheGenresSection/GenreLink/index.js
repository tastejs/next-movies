
import Link from 'next/link';
import DotCircleIcon from 'public/assets/svgs/icons/dot-circle.svg';

import LINKS from 'utils/constants/links';
import withTheme from 'utils/hocs/withTheme';

const GenreLink = ({
  theme,
  genre
}) => (
  <>
    <Link
      href={LINKS.GENRE.HREF}
      as={`${LINKS.GENRE.AS_PREFIX}/${genre.name}`}>
      <a>
        <DotCircleIcon
          fill='currentColor'
          width='1.25em'
          style={{marginRight: '4px'}} />
        {genre.name}
      </a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0.5rem 0rem;
        color: var(--palette-primary-light);
        line-height: 1;
        font-size: 1.1rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: transform ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
      }
    
      a:not(:last-child) {
        margin-right: 2rem;
      }
    
      a:hover {
        transform: translateY(-3px);
      }
    
      a:active {
        transform: translateY(2px);
      }
    `}</style>
  </>
);

export default withTheme(GenreLink);
