

import clsx from 'clsx';

import LoadingSpinner from 'components/UI/LoadingSpinner';
import withTheme from 'utils/hocs/withTheme';

const BUTTON_CLASS_NAME = 'button';
const BUTTON_BASE_CLASS_NAME = 'button-base';
const TEXT_BUTTON_CLASS_NAME = 'text-button';

const TextButton = ({
  theme,
  className,
  disabled,
  loading,
  children,
  ...rest
}) => (
  <>
    <button
      className={
        clsx(
          BUTTON_BASE_CLASS_NAME,
          BUTTON_CLASS_NAME,
          TEXT_BUTTON_CLASS_NAME,
          className
        )
      }
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <LoadingSpinner
          width={30}
          height={30} />
      ) : children}
    </button>
    <style jsx>{`
      // MEMO: MuiButtonBase-root
      .${BUTTON_BASE_CLASS_NAME} {
        border: 0;
        cursor: pointer;
        margin: 0;
        display: inline-flex;
        outline: 0;
        padding: 0;
        position: relative;
        align-items: center;
        user-select: none;
        border-radius: 0;
        vertical-align: middle;
        justify-content: center;
        text-decoration: none;
        background-color: transparent;
        -webkit-tap-highlight-color: transparent;
      }

      // MEMO: MuiButton-root
      .${BUTTON_CLASS_NAME} {
        color: var(--palette-common-white);
        padding: 6px 16px;
        // font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition-property: background-color, box-shadow, border;
        transition-duration: ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms, ${theme.transitions.duration.short}ms;
        transition-timing-function: ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut}, ${theme.transitions.easing.easeInOut};
        transition-delay: 0ms, 0ms, 0ms;
        // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        // font-weight: 500;
        // line-height: 1.75;
        border-radius: ${theme.shape.borderRadius}px;
        letter-spacing: 0.02857em;
        // text-transform: uppercase;
      }

      .${TEXT_BUTTON_CLASS_NAME} {
        color: var(--palette-primary-main);
        font-size: 1.5rem;
      }

      .${TEXT_BUTTON_CLASS_NAME}:disabled {
        background-color: transparent;
        color: var(--palette-action-disabled);
        pointer-events: none;
        border: 0;
      }
    `}</style>
  </>
);

export default withTheme(TextButton);
