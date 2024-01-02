import { AddBtn, FormLabel, IconBox, RegistrationForm, Input, ErrorText } from './RegisterForm.styled';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FaRegSmile } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Logo from '../Logo/Logo';

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
          <Input type='text' name='firstName' placeholder='First Name'/>
          <ErrorText name='firstName' component='div'></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <IoMdKey color='#24CCA7' size='18' />
          </IconBox>
          <Input
            type='text'
            placeholder='Password'
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
        <AddBtn type='submit'>Register</AddBtn>
      </RegistrationForm>
    </Formik>
  );
};
export default RegisterForm;