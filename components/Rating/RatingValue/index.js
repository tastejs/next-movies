
const RatingValue = ({
  className,
  value
}) => (
  <>
    <p className={`rating-value ${className}`}>
      {value}
    </p>
    <style jsx>{`
      .rating-value {
        color: var(--palette-primary-light);
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 0;
      }
    `}</style>
  </>
);

export default RatingValue;
