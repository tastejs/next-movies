

import clsx from 'clsx';

import withTheme from 'utils/hocs/withTheme';
import Backdrop from 'components/UI/Backdrop';

const SideDrawer = ({
  theme,
  opened,
  close,
  children
}) => (
  <>
    <Backdrop
      opened={opened}
      onClick={close} />
    <div className={clsx('side-drawer', opened ? 'opened' : 'closed')}>
      {children}
    </div>
    <style jsx>{`
      .side-drawer {
        position: fixed;
        width: 250px;
        max-width: 70%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: ${theme.zIndex.drawer};
        padding: 32px 16px;
        overflow-y: auto;
        box-sizing: border-box;
        transition: transform ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut};
        box-shadow: ${theme.shadows[16]};
        background-color: var(--palette-background-paper);
      }
    `}</style>
    <style jsx>{`
      .opened {
        transform: translateX(0);
      }
      
      .closed {
        transform: translateX(-100%)
      }
    `}</style>
  </>
);

export default withTheme(SideDrawer);
