import Logo from 'components/Logo/Logo';
import AuthBar from 'components/AuthBar/AuthBar';

import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <AuthBar />
    </HeaderContainer>
  );
};

export default Header;
