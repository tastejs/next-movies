

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const SummarySectionHeading = ({
  theme,
  className,
  children
}) => (
  <>
    <h3 className={clsx('summary-section-heading', className)}>{children}</h3>
    <style jsx>{`
      .summary-section-heading {
        margin-bottom: 1rem;
        color: var(--palette-text-primary);
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightBold};
        text-transform: uppercase;
      }
    
      @media ${theme.mediaQueries.medium} {
        .summary-section-heading {
          font-size: 1.25rem;
        }
      }
    `}</style>
  </>
);

export default withTheme(SummarySectionHeading);
