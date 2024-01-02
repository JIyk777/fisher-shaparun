import { RegisterBtn, LoginBtn, FormLabel, IconBox, RegistrationForm, Input, ErrorText } from './RegisterForm.styled';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FaRegSmile } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Logo from '../Logo/Logo';
import { useTranslation } from 'react-i18next';
import Box from '../Box';

const initialValues = {
  firstName: '',
  password: '',
  email: '',
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  password: yup.string().min(8).required(),
  email: yup.string().email().required(),
});
const RegisterForm = () => {
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
      <RegistrationForm>
        <Logo/>
        <FormLabel>
          <IconBox>
            <FaRegSmile color='#24CCA7' size='18' />
          </IconBox>
          <Input type='text' name='firstName' placeholder={t('description.registerInputFirstName')}/>
          <ErrorText name='firstName' component='div'></ErrorText>
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
        <FormLabel>
          <IconBox>
            <MdEmail color='#24CCA7' size='18' />
          </IconBox>
          <Input type='email' placeholder='https://example.com' name='email' />
          <ErrorText name='email' component='div'></ErrorText>
        </FormLabel>
        <Box>
          <RegisterBtn type='submit'>{t('description.registerBtn')}</RegisterBtn>
          <LoginBtn type='submit'>{t('description.logInBtn')}</LoginBtn>
        </Box>
      </RegistrationForm>
    </Formik>
  );
};
export default RegisterForm;