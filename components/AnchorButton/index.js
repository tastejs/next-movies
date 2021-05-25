

import Button from 'components/UI/Button';

const AnchorButton = React.forwardRef(({
  anchorProps = {},
  buttonProps = {}
}, ref) => (
  <>
    <a
      {...anchorProps}
      ref={ref}>
      <Button {...buttonProps} />
    </a>
  </>
));

export default AnchorButton;
