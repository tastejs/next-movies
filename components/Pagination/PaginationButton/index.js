

import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import { PAGINATION_BEHAVIOR_TYPES } from '../';
import LinkButton from 'components/LinkButton';
import QUERY_PARAMS from 'utils/constants/query-params';
import { SCROLL_TO_ELEMENT } from 'utils/constants';
import ArrowLeftIcon from 'public/assets/svgs/icons/arrow-left.svg';
import ArrowRightIcon from 'public/assets/svgs/icons/arrow-right.svg';

const scrollTo = () => {
  scroller.scrollTo(SCROLL_TO_ELEMENT, {
    duration: 1500,
    smooth: 'easeInOutQuart',
    offset: -50
  });
};

const PaginationButton = ({
  type,
  page,
  ...rest
}) => {
  const router = useRouter();
  const pageOnButton = type === PAGINATION_BEHAVIOR_TYPES.NEXT ? (page + 1) : (page - 1);

  return (
    <LinkButton
      // MEMO: inspired by https://github.com/vercel/next.js/issues/10494#issuecomment-642074689
      href={{
        pathname: router.pathname,
        query: {
          ...router.query,
          [QUERY_PARAMS.PAGE]: pageOnButton
        }
      }}
      anchorProps={{
        ...rest,
        onClick: scrollTo
      }}
      buttonProps={{
        startIcon: type !== PAGINATION_BEHAVIOR_TYPES.NEXT && (
          <ArrowLeftIcon
            fill='currentColor'
            width='1em'
            height='1em' />
        ),
        endIcon: type === PAGINATION_BEHAVIOR_TYPES.NEXT && (
          <ArrowRightIcon
            fill='currentColor'
            width='1em'
            height='1em' />
        ),
        contained: true,
        title: `Page ${pageOnButton}`
      }} />
  );
};

export default PaginationButton;
