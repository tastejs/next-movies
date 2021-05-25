

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const RatingValue = ({
  theme,
  className,
  value
}) => (
  <>
    <p className={clsx('rating-value', className)}>
      {value}
    </p>
    <style jsx>{`
      .rating-value {
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 0;
      }
    `}</style>
  </>
);

export default withTheme(RatingValue);
