import React, {useCallback } from 'react';

import {DarkBlueButton} from '../globalComponents'

import { ModalContainer } from './styles';
import Modal from '../Modal';


const ModalGeneric = ({
  isOpen,
  setIsOpen,
  children
}) => {

  const toggleModal = useCallback(
    async () => {
      setIsOpen();
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalContainer>  
        {children}
        <DarkBlueButton onClick={toggleModal}>Fechar</DarkBlueButton>
      </ModalContainer>
    </Modal>
  );
};

export default ModalGeneric;
