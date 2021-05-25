
import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';

/**
 * MEMO:
 * Could follow the MUI practices for size specs like padding.
 * Could split up into contained and outlined buttons.
 */
const ButtonBase = ({
  theme,
  className,
  contained,
  children,
  ...rest
}) => (
  <>
    <button
      className={clsx('button-base', className)}
      {...rest}>
      {children}
    </button>
    <style jsx>{`
      .button-base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        outline: none;
        padding: 6px 16px;
        min-width: 96px;
        min-height: 48px;
        user-select: none;
        font-weight: ${theme.typography.fontWeightMedium};
        font-size: 1.5rem;
        color: ${contained ? 'var(--palette-primary-contrast-text)' : 'var(--palette-primary-main)'};
        border: 1px solid ${contained ? 'transparent' : 'rgba(var(--palette-primary-main-rgb), 0.5)'};
        border-radius: ${theme.shape.borderRadius}px;
        box-shadow: ${contained ? `${theme.shadows[1]}` : 'none'};
        background-color: ${contained ? 'var(--palette-primary-main)' : 'transparent'};
        transition-property: background-color, box-shadow, border, transform;
        transition-duration: ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms;
        transition-timing-function: ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut};
      }
    
      .button-base:hover {
        transform: translateY(-1px);
        border: 1px solid ${contained ? 'transparent' : 'var(--palette-primary-main)'};
        background-color: ${contained ? 'var(--palette-primary-dark)' : 'rgba(var(--palette-primary-main-rgb), 0.08)'};
      }

      .button-base:active {
        transform: translateY(2px);
      }

      .button-base:disabled {
        color: var(--palette-action-disabled);
        background-color: var(--palette-action-disabled-background);
        pointer-events: none;
      }

      @media ${theme.mediaQueries.small} {
        .button-base {
          padding: 4px 8px;
          min-width: 64px;
          min-height: 36px;
        }
      }
    `}</style>
  </>
);

export default withTheme(ButtonBase);
