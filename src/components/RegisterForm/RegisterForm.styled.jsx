import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const RegistrationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[10]}px;

  margin-top: ${props => props.theme.space[10]}px;

  width: 100%;
`;

export const Input = styled(Field)`
  padding-bottom: ${props => props.theme.space[2]}px;
  padding-left: ${props => props.theme.space[4]}px;

  width: 100%;

  font-weight: ${props => props.theme.fontWeights.bolt};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;
  text-align: center;

  color: #bdbdbd;

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

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  color: red;

  padding-left: ${props => props.theme.space[4]}px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;
`;
export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.space[3]}px 0;

  font-size: 18px;
  line-height: 27px;

  border: 0;
  border-radius: ${props => props.theme.radii[2]}px;

  color: ${props => props.theme.colors.mainWhite};
  background-color: ${props => props.theme.colors.mainBtn};

  cursor: pointer;

  box-shadow: 0px 6px 12px ${props => props.theme.colors.btnShadow};

  @media screen and (max-width: 479px) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    width: 240px;
  }
`;

export const FormLabel = styled.label`
  position: relative;

  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    width: 394px;
  }
`;

export const IconBox = styled.span`
  position: absolute;
  top: 7px;
  left: -8px;
`;
