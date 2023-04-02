import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

import { BackDrop, ModalContent, CloseModalBtn } from './ModalUniversal.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <BackDrop onClick={prop.onClick} type="flipInX">
      <ModalContent>
        <CloseModalBtn onClick={prop.onClose}>
          <BsXLg color="#FFFFFF" />
        </CloseModalBtn>
        {prop.children}
      </ModalContent>
    </BackDrop>,
    modalRoot
  );
};

export default ModalUniversal;
