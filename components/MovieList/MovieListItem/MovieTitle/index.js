
const MovieTitle = ({
  className,
  children,
  ...rest
}) => (
  <>
    <h2
      {...rest}
      className={`movie-title ${className}`}>
      {children}
    </h2>
    <style jsx>{`
      .movie-title {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--palette-text-secondary);
        margin-bottom: 1rem;
        line-height: 1.4;
      }
    `}</style>
  </>
);

export default MovieTitle;
