import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { toggleShowModalAddPond } from 'redux/modal/modalSlice';

import ModalUniversal from '../ModalUniversal';
import AddPondForm from 'components/AddPondForm/AddPondForm';

import {
  ModalContainer,
  CloseModalBtn,
  ModalTitle,
} from './ModalAddPond.styled';

const ModalAddPond = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCloseModal = () => {
    dispatch(toggleShowModalAddPond(false));
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
        <ModalTitle>{t('description.modalAddPondTitle')}</ModalTitle>
        <AddPondForm onClick={handleCloseModal} />
        <CloseModalBtn type="button" onClick={handleCloseModal}>
          {t('description.modalCloseBtn')}
        </CloseModalBtn>
      </ModalContainer>
    </ModalUniversal>
  );
};

export default ModalAddPond;
