
import withTheme from 'utils/hocs/withTheme';

const SummarySectionHeading = ({
  theme,
  className,
  children
}) => (
  <>
    <h3 className={`summary-section-heading ${className}`}>{children}</h3>
    <style jsx>{`
      .summary-section-heading {
        margin-bottom: 1rem;
        color: var(--palette-text-primary);
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    
      @media ${theme.mediaQueries.medium} {
        .summary-section-heading {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(SummarySectionHeading);
