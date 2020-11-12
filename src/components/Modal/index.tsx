import React, { FC } from 'react';
import {createPortal} from 'react-dom';

import { ModalContainer, ModalHeader, ModalOverLay, ModalWrapper } from './styles';

interface IModalProps{
    isOpen: boolean;
    message: string;
    onHide: () => void;
}

const Modal : FC<IModalProps>= ({ isOpen, onHide, message }) => isOpen ? createPortal(
  <>
    <ModalOverLay />
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalContainer>
        <ModalHeader>
            <span className={'sm-12'}>

        {message}
            </span>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={onHide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
      </ModalContainer>
    </ModalWrapper>
  </>, document.body
) : null;

export default Modal;