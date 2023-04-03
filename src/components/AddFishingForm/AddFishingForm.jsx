import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { BsCalendar3 } from 'react-icons/bs';
import { RiScales2Line } from 'react-icons/ri';
import { SiCurl } from 'react-icons/si';

// import { useDispatch } from 'react-redux';

import { AddBtn, FormLabel, IconBox } from './AddFishingForm.styled';

const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[10]}px;

  margin-top: ${props => props.theme.space[10]}px;

  width: 100%;
`;

const Input = styled(Field)`
  padding-bottom: ${props => props.theme.space[2]}px;
  padding-left: ${props => props.theme.space[4]}px;

  width: 100%;

  font-weight: ${props => props.theme.fontWeights.bolt};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;

  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  &::placeholder {
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: ${props => props.theme.lineHeights[0]}px;
  }

  &:hover,
  &:focus {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
  }
`;

const ErrorText = styled(ErrorMessage)`
  position: absolute;
  color: red;

  padding-left: ${props => props.theme.space[4]}px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;
`;

const initialValues = {
  data: '',
  weight: '',
  image: '',
};

const schema = yup.object().shape({
  data: yup.string().required(),
  weight: yup.number().max(100).required(),
  image: yup.string().url().required(),
});

const AddFishingForm = p => {
  //   const { onClick } = p;

  //   const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    // dispatch();
    // onClick();
    return;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AddForm>
        <FormLabel>
          <IconBox>
            <BsCalendar3 color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter date 01.02.2023"
            name="data"
          />
          <ErrorText name="data" component="div"></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <RiScales2Line color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter weight 0.01 to 100"
            name="weight"
          />
          <ErrorText name="weight" component="div"></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <SiCurl color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="url"
            placeholder="Enter URL https://example.com"
            name="image"
          />
          <ErrorText name="image" component="div"></ErrorText>
        </FormLabel>
        <AddBtn type="submit">ADD FISHING</AddBtn>
      </AddForm>
    </Formik>
  );
};
export default AddFishingForm;
