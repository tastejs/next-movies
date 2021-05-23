
import Link from 'next/link';

import Button from 'components/UI/Button';

const LinkButton = ({
  as,
  href,
  anchorProps = {},
  buttonProps = {}
}) => (
  <>
    <Link
      passHref
      as={as}
      href={href}>
      <a {...anchorProps}>
        <Button {...buttonProps} />
      </a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </>
);

export default LinkButton;
