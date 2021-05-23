
import ReactRating from 'react-rating';
import StarFillIcon from 'public/assets/svgs/icons/star-filled.svg';
import StarOutlinedIcon from 'public/assets/svgs/icons/star-outlined.svg';

import RatingValue from './RatingValue';

const Rating = ({
  voteAverage,
  withValue
}) => (
  <>
    <div className='rating'>
      <ReactRating
        readonly
        style={{lineHeight: 0}}
        emptySymbol={(
          <StarOutlinedIcon
            fill='currentColor'
            width='1.5em' />
        )}
        fullSymbol={(
          <StarFillIcon
            fill='currentColor'
            width='1.5em' />
        )}
        initialRating={voteAverage / 2} />
      {withValue && (
        <RatingValue
          className='rating-value-side-margin'
          value={voteAverage} />
      )}
    </div>
    <style jsx>{`
      .rating {
        display: flex;
        align-items: center;
        color: var(--palette-primary-light);
      }
      :global(.rating-value-side-margin) {
        margin: 0 8px;
      }
    `}</style>
  </>
);

export default Rating;
