

import ReactStars from 'components/UI/ReactStars';
import RatingValue from './RatingValue';
import CLASS_NAMES from 'utils/constants/class-names';

const RATING_VALUE_CLASS_NAME = 'rating-value-side-margin';

const Rating = ({
  voteAverage,
  withValue
}) => (
  <>
    <div className={CLASS_NAMES.RATING}>
      <ReactStars
        edit={false}
        size={24}
        color2='var(--palette-warning-main)'
        value={voteAverage / 2.0} />
      {withValue && (
        <RatingValue
          className={RATING_VALUE_CLASS_NAME}
          value={voteAverage} />
      )}
    </div>
    <style jsx>{`
      .${CLASS_NAMES.RATING} {
        display: flex;
        align-items: center;
      }
      :global(.${RATING_VALUE_CLASS_NAME}) {
        margin: 0 8px;
        color: var(--palette-warning-main);
      }
    `}</style>
  </>
);

export default Rating;
