import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { toggleShowModalMap } from 'redux/modal/modalSlice';
import ModalUniversal from '../ModalUniversal';
import NewMap from 'components/Map/Map';

import { ModalContainer, CloseModalBtn, ModalTitle } from './ModalMap.styled';

const ModalMap = () => {
  const { t } = useTranslation();
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
        <ModalTitle>{t('description.modalMapTitle')}</ModalTitle>
        <NewMap></NewMap>
        <CloseModalBtn type="button" onClick={handleCloseModal}>
          {t('description.modalCloseBtn')}
        </CloseModalBtn>
      </ModalContainer>
    </ModalUniversal>
  );
};

export default ModalMap;
