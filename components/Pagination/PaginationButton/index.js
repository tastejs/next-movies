
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import { PAGINATION_BEHAVIOR_TYPES } from '../';
import LinkButton from 'components/LinkButton';
import QUERY_PARAMS from 'utils/constants/query-params';
import ArrowLeftIcon from 'public/assets/svgs/icons/arrow-left.svg';
import ArrowRightIcon from 'public/assets/svgs/icons/arrow-right.svg';

const scrollTo = () => {
  scroller.scrollTo('scroll-to-element', {
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
      as={{
        pathname: router.asPath.split('?')[0],
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
        left: type !== PAGINATION_BEHAVIOR_TYPES.NEXT,
        contained: true,
        title: `Page ${pageOnButton}`,
        icon: type === PAGINATION_BEHAVIOR_TYPES.NEXT ? (
          <ArrowRightIcon
            fill='currentColor'
            width='1em' />
        ) : (
          <ArrowLeftIcon
            fill='currentColor'
            width='1em' />
        )
      }} />
  );
};

export default PaginationButton;
