

import clsx from 'clsx';

const CLASS_NAME = 'poster-title';

const PosterTitle = ({
  theme,
  className,
  children,
  ...rest
}) => (
  <>
    <h2
      className={clsx(CLASS_NAME, className)}
      {...rest}>
      {children}
    </h2>
    <style jsx>{`
      .${CLASS_NAME} {
        text-align: center;
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightRegular};
        color: var(--palette-text-secondary);
        margin-bottom: 1rem;
        line-height: 1.4;
      }
    `}</style>
  </>
);

export default PosterTitle;
