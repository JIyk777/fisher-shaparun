import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { TbWorldLongitude, TbWorldLatitude } from 'react-icons/tb';
import { MdLocationCity } from 'react-icons/md';
import { GiWaterSplash } from 'react-icons/gi';
import { SiCurl } from 'react-icons/si';

import { useDispatch } from 'react-redux';

import { addNewPond } from 'redux/postsStore/postsSlice';

import { AddBtn, FormLabel, IconBox } from './AddPondForm.styled';

const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[4]}px;

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
  text-align: center;

  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  &::placeholder {
    text-align: center;
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
  bottom: -20px;
  left: 0;
  color: red;

  padding-left: ${props => props.theme.space[4]}px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;
`;

const initialValues = {
  name: '',
  cityName: '',
  regionName: '',
  latitude: '',
  longitude: '',
  image: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  cityName: yup.string().required(),
  regionName: yup.string().required(),
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  image: yup.string().url().required(),
});

const AddPondForm = p => {
  const { onClick } = p;

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const newPond = {
      id: uuidv4(),
      name: values.name,
      location: {
        cityName: values.cityName,
        regionName: values.regionName,
        latitude: values.latitude,
        longitude: values.longitude,
      },
      picture: values.image,
      fishing: [],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    };
    dispatch(addNewPond(newPond));

    onClick();
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
            <GiWaterSplash color="#24CCA7" size="18" />
          </IconBox>
          <Input type="text" placeholder="Please enter pond name" name="name" />
          <ErrorText name="name" component="div"></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <MdLocationCity color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter city name"
            name="cityName"
          />
          <ErrorText name="cityName" component="div"></ErrorText>
        </FormLabel>

        <FormLabel>
          <IconBox>
            <MdLocationCity color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter region name"
            name="regionName"
          />
          <ErrorText name="regionName" component="div"></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <TbWorldLatitude color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter latitude"
            name="latitude"
          />
          <ErrorText name="latitude" component="div"></ErrorText>
        </FormLabel>
        <FormLabel>
          <IconBox>
            <TbWorldLongitude color="#24CCA7" size="18" />
          </IconBox>
          <Input
            type="text"
            placeholder="Please enter longitude "
            name="longitude"
          />
          <ErrorText name="longitude" component="div"></ErrorText>
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
        <AddBtn type="submit">ADD POND</AddBtn>
      </AddForm>
    </Formik>
  );
};
export default AddPondForm;
