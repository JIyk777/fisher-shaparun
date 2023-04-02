import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleShowModalAddFishing } from 'redux/modal/modalSlice';

import ModalUniversal from '../ModalUniversal';

import {
  ModalContainer,
  CloseModalBtn,
  ModalTitle,
} from './ModalAddFishing.styled';

const ModalAddFishing = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleShowModalAddFishing(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const escKeyDown = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = '';
    };
  });
  return (
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalTitle>Add fishing</ModalTitle>
        <CloseModalBtn type="button" onClick={handleCloseModal}>
          Cancel
        </CloseModalBtn>
      </ModalContainer>
    </ModalUniversal>
  );
};

export default ModalAddFishing;
