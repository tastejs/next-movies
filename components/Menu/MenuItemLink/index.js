
import Link from 'next/link';

import withTheme from 'utils/hocs/withTheme';

const MenuItemLink = React.forwardRef(({
  theme,
  href,
  as,
  children,
  selected,
  ...rest
}, ref) => (
  <>
    <Link
      href={href}
      as={as}
      passHref>
      <a
        ref={ref}
        {...rest}>
        {children}
      </a>
    </Link>
    <style jsx>{`
      a {
        outline: none;
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 1;
        color: ${selected ? 'var(--palette-secondary-main)' : 'var(--palette-primary-main)'};
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </>
));

export default withTheme(MenuItemLink);
