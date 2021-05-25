
import Router from 'next/router';

import Button from 'components/UI/Button';
import ArrowLeftIcon from 'public/assets/svgs/icons/arrow-left.svg';

const BackButton = props => (
  <Button
    contained
    title='Back'
    onClick={Router.back}
    startIcon={
      <ArrowLeftIcon
        fill='currentColor'
        width='1em' />
    }
    {...props} />
);

export default BackButton;
