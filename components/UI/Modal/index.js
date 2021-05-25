
import { useRef } from 'react';
import clsx from 'clsx';

import Backdrop from 'components/UI/Backdrop';
import withTheme from 'utils/hocs/withTheme';
import useClickAway from 'utils/hooks/useClickAway';

const MODAL_CLASS_NAME = 'modal';
const MODAL_BODY_CLASS_NAME = 'modal-body';
const MODAL_HEADER_CLASS_NAME = 'modal-header';
const MODAL_FOOTER_CLASS_NAME = 'modal-footer';

const Modal = ({
  theme,
  opened,
  onClose,
  className,
  title,
  body,
  footer,
  ...rest
}) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    onClose();
  });

  return (
    <>
      <Backdrop opened={opened}>
        <div
          ref={ref}
          className={clsx(MODAL_CLASS_NAME, className)}
          {...rest}>
          {title && (
            <div className={MODAL_HEADER_CLASS_NAME}>
              <h2>{title}</h2>
            </div>
          )}
          {body && (
            <div className={MODAL_BODY_CLASS_NAME}>
              {body}
            </div>
          )}
          {footer && (
            <div className={MODAL_FOOTER_CLASS_NAME}>
              {footer}
            </div>
          )}
        </div>
      </Backdrop>
      <style jsx>{`
        .${MODAL_CLASS_NAME} {
          width: 80%;
          max-height: 435px;
          max-width: 444px;
          box-shadow: ${theme.shadows[5]};
          background-color: var(--palette-background-paper);
        }
        
        .${MODAL_HEADER_CLASS_NAME} {
          padding: 16px 24px;
          border-bottom: 1px solid var(--palette-divider);
        }

        .${MODAL_HEADER_CLASS_NAME} > h2 {
          font-size: 2.125rem;
        }
        
        .${MODAL_BODY_CLASS_NAME} {
          padding: 16px 24px;
          font-size: 1.5rem;
        }
        
        .${MODAL_FOOTER_CLASS_NAME} {
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px solid var(--palette-divider);
        }
      `}</style>
    </>
  );
};

export default withTheme(Modal);
