

import clsx from 'clsx';
import withTheme from 'utils/hocs/withTheme';

const CLASS_NAME = 'backdrop';
const OPENED_CLASS_NAME = 'opened-backdrop';

const Backdrop = ({
  theme,
  className,
  opened,
  ...rest
}) => (
  <>
    <div
      className={
        clsx(
          CLASS_NAME,
          {[OPENED_CLASS_NAME]: opened},
          className
        )
      }
      {...rest} />
    <style jsx>{`
      .${CLASS_NAME} {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        z-index: ${theme.zIndex.appBar + 1};
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        background-color: var(--palette-background-backdrop);
        -webkit-tap-highlight-color: transparent;
        transition: opacity ${theme.transitions.duration.leavingScreen}ms ${theme.transitions.easing.easeInOut} 0ms;
      }

      .${OPENED_CLASS_NAME} {
        visibility: visible;
        opacity: 1;
      }
    `}</style>
  </>
);

export default withTheme(Backdrop);
