

import Link from 'next/link';

import Button from 'components/UI/Button';

const LinkButton = ({
  as,
  href,
  anchorProps = {},
  buttonProps = {}
}) => (
  <>
    <Link passHref as={as} href={href} {...anchorProps}>

      <Button {...buttonProps} />

    </Link>
  </>
);

export default LinkButton;
