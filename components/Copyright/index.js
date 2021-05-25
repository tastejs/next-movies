
import withTheme from 'utils/hocs/withTheme';

const Copyright = ({
  theme,
  text,
  ...rest
}) => (
  <>
    <a {...rest}>
      {text}
    </a>
    <style jsx>{`
      a {
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightMedium};
        color: var(--palette-secondary-main);
      }
    `}</style>
  </>
);

export default withTheme(Copyright);
