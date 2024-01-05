import { RegisterBtn, LoginBtn, FormLabel, IconBox, LogForm, Input, ErrorText } from './LoginForm.styled';

import { Formik } from 'formik';
import * as yup from 'yup';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Logo from '../Logo/Logo';
import Box from '../Box';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig';

const initialValues = {
  password: '',
  email: '',
};

const schema = yup.object().shape({
  password: yup.string().min(8).required(),
  email: yup.string().email().required(),
});
const LoginForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <LogForm>
        <Logo/>
        <FormLabel>
          <IconBox>
            <MdEmail color='#24CCA7' size='18' />
          </IconBox>
          <Input type='email' placeholder='https://example.com' name='email' />
          <ErrorText name='email' component='div'></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <IoMdKey color='#24CCA7' size='18' />
          </IconBox>
          <Input
            type='text'
            placeholder={t('description.registerInputPassword')}
            name='password'
          />
          <ErrorText name='password' component='div'></ErrorText>
        </FormLabel>
        <Box width='100%' display='flex'alignItems='center' flexDirection='column'>
          <LoginBtn type='submit'>{t('description.logInBtn')}</LoginBtn>
          <RegisterBtn type='button' onClick={() => navigate('/register')}>{t('description.registerBtn')}</RegisterBtn>
        </Box>
      </LogForm>
    </Formik>
  );
};
export default LoginForm;