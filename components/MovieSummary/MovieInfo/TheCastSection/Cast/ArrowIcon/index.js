
import ChevronLeftIcon from 'public/assets/svgs/icons/chevron-left.svg';
import ChevronRightIcon from 'public/assets/svgs/icons/chevron-right.svg';

import ARROW_DIRECTIONS from 'utils/constants/arrow-directions';

// MEMO: not used but keep it for future use
const ArrowIcon = ({
  direction,
  onClick
}) => (
  <div
    onClick={onClick}
    style={{
      display: 'inline-block',
      position: 'absolute',
      left: direction === ARROW_DIRECTIONS.LEFT ? '-15px' : 'unset',
      right: direction === ARROW_DIRECTIONS.RIGHT ? '-15px' : 'unset',
      top: '50%',
      transform: 'translate(0, -50%)',
      display: 'block',
      padding: '0',
      width: '12px',
      height: '12px',
      cursor: 'pointer'
    }}>
    {direction === ARROW_DIRECTIONS.LEFT
    ? (
      <ChevronLeftIcon
        fill='currentColor'
        width='1em' />
    ) : direction === ARROW_DIRECTIONS.RIGHT
      ? (
        <ChevronRightIcon
          fill='currentColor'
          width='1em' />
      ) : ''}
  </div>
);

export default ArrowIcon;
