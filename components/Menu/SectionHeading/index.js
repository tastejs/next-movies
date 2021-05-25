

import withTheme from 'utils/hocs/withTheme';

const SectionHeading = ({
  theme,
  children
}) => (
  <>
    <h2>
      {children}
    </h2>
    <style jsx>{`
      font-weight: ${theme.typography.fontWeightBold};
      font-size: 1.25rem;
      color: var(--palette-text-primary);
      text-transform: uppercase;
      letter-spacing: -0.5px;
      margin: 0 0 1rem 1rem;
      h2:not(:first-child) {
        margin-top: 4rem;
      }
    `}</style>
  </>
);

export default withTheme(SectionHeading);
