import logo from 'assets/images/logo.png';
import { IconText, LogoImg, LogoContainer } from './Logo.styled';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <IconText>{t('description.logoTitle')}</IconText>
    </LogoContainer>
  );
};

export default Logo;
