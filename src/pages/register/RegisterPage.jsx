import { RegisterSection } from './RegisterPage.styled';
import authImage from 'assets/images/authImage.png';
import Box from 'components/Box'

import Container from '../../components/Container/Container';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <RegisterSection>
      <Container>
        <Box display='flex'>
          <img src={authImage} alt='Fisher man'/>
          <RegisterForm/>
        </Box>
      </Container>
    </RegisterSection>
  );
};
export default RegisterPage;