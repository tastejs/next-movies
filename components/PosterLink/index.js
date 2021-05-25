
import Link from 'next/link';

import withTheme from 'utils/hocs/withTheme';

const PosterLink = React.forwardRef(({
  theme,
  href,
  as,
  children,
  ...rest
}, ref) => (
  <>
    <Link
      passHref
      as={as}
      href={href}>
      <a
        ref={ref}
        {...rest}>
        {children}
      </a>
    </Link>
    <style jsx>{`
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        transition: transform ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }
    
      // TODO: could follow the practices for hover effect from https://web.dev/authors/addyosmani 
      a:hover {
        transform: scale(1.03);
      }

      a:hover::after {
        transform: scaleY(1);
      }
    
      a::after {
        content: '';
        position: absolute;
        z-index: -99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(0);
        transform-origin: top;
        background-color: var(--palette-background-paper);
        box-shadow: ${theme.shadows[1]};
      }
    `}</style>
  </>
));

export default withTheme(PosterLink);
