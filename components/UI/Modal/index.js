/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
