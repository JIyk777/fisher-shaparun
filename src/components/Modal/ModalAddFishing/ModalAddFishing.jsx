import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { toggleShowModalAddFishing } from 'redux/modal/modalSlice';
import ModalUniversal from '../ModalUniversal';
import AddFishingForm from 'components/AddFishingForm/AddFishingForm';

import {
  ModalContainer,
  CloseModalBtn,
  ModalTitle,
} from './ModalAddFishing.styled';

const ModalAddFishing = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
        <ModalTitle>{t('description.modalAddFishingTitle')}</ModalTitle>
        <AddFishingForm onClick={handleCloseModal} />
        <CloseModalBtn type="button" onClick={handleCloseModal}>
          {t('description.modalCloseBtn')}
        </CloseModalBtn>
      </ModalContainer>
    </ModalUniversal>
  );
};

export default ModalAddFishing;
