import React, { FC } from 'react';

import Modal from '../Modal/Modal';

// import { ReactComponent as Cross } from '../../img/cross.svg';
// import { ReactComponent as Info } from '../../img/information.svg';

import css from './InfoModal.module.css';

export interface IModalRelocationForm {
  onCloseModal: () => void;
  isDisplay: boolean;
}

const InfoModal: FC<IModalRelocationForm> = ({ onCloseModal, isDisplay }) => (
  <Modal onClose={onCloseModal} display={isDisplay}>
    <div className={css.WrapperModalItems}>
      <div className={css.WrapperHeader}>
        {/*<Info className={css.InfoSVG} />*/}
        {/*<Cross className={css.Cross} onClick={onCloseModal} />*/}
      </div>
      <div className={css.InformTextModal}>
        <span>test</span>
      </div>
    </div>
  </Modal>
);

export default InfoModal;
