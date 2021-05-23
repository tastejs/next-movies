

import Link from 'next/link';

import withTheme from 'utils/hocs/withTheme';

const MovieLinkInnerWrapper = withTheme(React.forwardRef(({
  theme,
  children,
  ...rest
}, ref) => (
  <>
    <a
      ref={ref}
      {...rest}>
      {children}
    </a>
    <style jsx>{`
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: transform ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut};
      }
    
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
)));

const MovieLink = React.forwardRef(({
  href,
  as,
  children,
  ...rest
}, ref) => (
  <Link
    passHref
    as={as}
    href={href}>
    <MovieLinkInnerWrapper
      ref={ref}
      {...rest}>
      {children}
    </MovieLinkInnerWrapper>
  </Link>
));

export default MovieLink;
