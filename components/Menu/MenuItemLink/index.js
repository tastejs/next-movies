
import Link from 'next/link';

const MenuItemLinkInnerWrapper = React.forwardRef(({
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
      outline: none;
      display: block;
      margin-bottom: 0.5rem;
      text-decoration: none;
    `}</style>
  </>
));

const MenuItemLink = React.forwardRef(({
  href,
  as,
  children,
  ...rest
}, ref) => (
  <Link
    href={href}
    as={as}
    passHref>
    <MenuItemLinkInnerWrapper
      ref={ref}
      {...rest}>
      {children}
    </MenuItemLinkInnerWrapper>
  </Link>
));

export default MenuItemLink;
