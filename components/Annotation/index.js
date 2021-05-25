
import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

const CLASS_NAME = 'annotation';

const Annotation = ({
  theme,
  className,
  ...rest
}) => (
  <>
    <p
      className={clsx(CLASS_NAME, className)}
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightMedium};
        color: var(--palette-text-secondary);
      }
    `}</style>
  </>
);

export default withTheme(Annotation);
