
import Router from 'next/router';

import Button from 'components/UI/Button';
import ArrowLeftIcon from 'public/assets/svgs/icons/arrow-left.svg';

const BackButton = props => (
  <Button
    {...props}
    left
    contained
    title='Back'
    onClick={Router.back}
    icon={(
      <ArrowLeftIcon
        fill='currentColor'
        width='1em' />
    )} />
);

export default BackButton;
