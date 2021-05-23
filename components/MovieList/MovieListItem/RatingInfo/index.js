
import Rating from 'components/Rating';
import Tooltip from 'components/UI/Tooltip';

const RatingInfo = ({
  className,
  voteAverage,
  tooltip
}) => (
  <>
    <div className={`rating-info ${className}`}>
      <Rating voteAverage={voteAverage} />
      <Tooltip className='tooltip-show'>{tooltip}</Tooltip>
    </div>
    <style jsx>{`
      .rating-info {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 0.5rem;
        color: var(--palette-primary-main);
      }

      .rating-info:hover :global(.tooltip-show) {
        visibility: visible;
      }
    `}</style>
  </>
);

export default RatingInfo;
