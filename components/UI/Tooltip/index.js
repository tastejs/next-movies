
import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

// MEMO: could follow the MUI practices https://material-ui.com/components/tooltips/
const Tooltip = ({
  theme,
  className,
  children,
  ...rest
}) => (
  <>
    <span
      className={clsx('tooltip', className)}
      {...rest}>
      {children}
    </span>
    <style jsx>{`
      .tooltip {
        visibility: hidden;
        width: 120px;
        font-weight: ${theme.typography.fontWeightMedium};
        font-size: 1.25rem;
        background-color: var(--palette-primary-light);
        color: var(--palette-primary-contrast-text);
        text-align: center;
        border-radius: ${theme.shape.borderRadius}px;
        padding: 1rem;
        z-index: ${theme.zIndex.tooltip};
        transition: visibility ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
      }
      
      .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: var(--palette-primary-light) transparent transparent transparent;
      }
    `}</style>
  </>
);

export default withTheme(Tooltip);
