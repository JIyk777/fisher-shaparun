import { RegisterBtn, LoginBtn, FormLabel, IconBox, LogForm, Input, ErrorText } from './LoginForm.styled';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FaRegSmile } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';
import Box from '../Box';

const initialValues = {
  password: '',
  email: '',
};

const schema = yup.object().shape({
  password: yup.string().min(8).required(),
  email: yup.string().email().required(),
});
const LoginForm = () => {
  const { t } = useTranslation();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm();
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
        <Box>
          <LoginBtn type='submit'>{t('description.logInBtn')}</LoginBtn>
          <RegisterBtn type='submit'>{t('description.registerBtn')}</RegisterBtn>
        </Box>
      </LogForm>
    </Formik>
  );
};
export default LoginForm;