

import clsx from 'clsx';

import Rating from 'components/Rating';
import Tooltip from 'components/UI/Tooltip';

const RatingInfo = ({
  className,
  voteAverage,
  tooltip
}) => (
  <>
    <div className={clsx('rating-info', className)}>
      <Rating voteAverage={voteAverage} />
      <Tooltip className='tooltip-position tooltip-show'>{tooltip}</Tooltip>
    </div>
    <style jsx>{`
      .rating-info {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      :global(.tooltip-position) {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .rating-info:hover :global(.tooltip-show) {
        visibility: visible;
      }
    `}</style>
  </>
);

export default RatingInfo;
