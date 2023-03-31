import logo from 'assets/images/logo.png';
import { IconText, LogoImg, LogoContainer } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <IconText>РИБАЛКА</IconText>
    </LogoContainer>
  );
};

export default Logo;
