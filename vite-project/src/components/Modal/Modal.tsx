import React, { FC, useCallback, useEffect } from 'react';

import css from './Modal.module.css';

interface IModalProps {
  display: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal: FC<IModalProps> = ({ display = false, onClose, children }) => {
  const closeModalByKey = useCallback(
    (event: any) => {
      if (event.key === 'Escape' && display) {
        onClose();
      }
    },
    [onClose, display]
  );

  const mouseClickOutSide = useCallback(
    (event: any) => {
      if (event.target.className === css.ModalWrapper && display) {
        onClose();
      }
    },
    [onClose, display]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModalByKey);

    return () => document.removeEventListener('keydown', closeModalByKey);
  }, [closeModalByKey]);

  return display ? (
    <div className={css.ModalWrapper} onKeyPress={closeModalByKey} onClick={mouseClickOutSide}>
      <div className={css.PopUpWrapper}>{children}</div>
    </div>
  ) : null;
};

export default Modal;
