import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleShowModalMap } from 'redux/modal/modalSlice';

import ModalUniversal from '../ModalUniversal';
import NewMap from 'components/Map/Map';

import { ModalContainer, CloseModalBtn, ModalTitle } from './ModalMap.styled';

const ModalMap = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(
      toggleShowModalMap({
        showModal: false,
        location: {},
      })
    );
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
        <ModalTitle>Pond location</ModalTitle>
        <NewMap></NewMap>
        <CloseModalBtn type="button" onClick={handleCloseModal}>
          CANCEL
        </CloseModalBtn>
      </ModalContainer>
    </ModalUniversal>
  );
};

export default ModalMap;
