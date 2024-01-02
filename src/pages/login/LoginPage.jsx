import { LoginSection, RegisterSection } from './LoginPage.styled';
import authImage from 'assets/images/authImage.png';
import Box from 'components/Box'
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useMediaQuery } from 'react-responsive';
import LangBar from '../../components/LangBar/LangBar';

const LoginPage = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isOnlyMobile = useMediaQuery({ maxWidth: 479 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <LoginSection>
      <Container>
        <LangBar />
        <Box display='flex'
             flexDirection={(isDesktop && 'row') || (isMobile && 'column')}
        >
          {
            isDesktop && <img src={authImage} alt='Fisher man' style={{ marginRight: '20px' }}/>
          }
          <LoginForm/>
          {
            isOnlyMobile && <img src={authImage} alt='Fisher man' style={{ marginTop: '20px' }}/>
          }
        </Box>
      </Container>
    </LoginSection>
  );
};
export default LoginPage;