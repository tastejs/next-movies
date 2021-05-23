
import withTheme from 'utils/hocs/withTheme';

const Tooltip = ({
  theme,
  className,
  children,
  ...rest
}) => (
  <>
    <span
      {...rest}
      className={`tooltip ${className}`}>
      {children}
    </span>
    <style jsx>{`
      .tooltip {
        visibility: hidden;
        width: 120px;
        font-weight: 500;
        font-size: 1.1rem;
        background-color: var(--palette-primary-light);
        color: ${theme.palette.primary.contrastText};
        text-align: center;
        border-radius: ${theme.shape.borderRadius}px;
        padding: 1rem;
        position: absolute;
        z-index: 999;
        bottom: 150%;
        left: 50%;
        transform: translate(-50%, 0);
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
