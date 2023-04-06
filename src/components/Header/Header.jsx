import Logo from 'components/Logo/Logo';
import AuthBar from 'components/AuthBar/AuthBar';
import LangBar from 'components/LangBar/LangBar';

import { HeaderContainer } from './Header.styled';
import Box from 'components/Box';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Box display="flex">
        <LangBar />
        <AuthBar />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
