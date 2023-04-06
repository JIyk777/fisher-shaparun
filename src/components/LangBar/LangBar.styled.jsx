import styled from 'styled-components';

export const LangBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${props => props.theme.space[2]}px;
  gap: ${props => props.theme.space[1]}px;
`;

export const LangBtnEn = styled.button`
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[0]}px;

  border: 1px solid
    ${props =>
      props.colorValue
        ? props.theme.colors.mainBtn
        : props.theme.colors.cancelBtnColor};
  border-radius: ${props => props.theme.radii[2]}px;

  color: ${props =>
    props.colorValue
      ? props.theme.colors.mainWhite
      : props.theme.colors.cancelBtnColor};
  background-color: ${props =>
    props.colorValue
      ? props.theme.colors.mainBtn
      : props.theme.colors.mainWhite};
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.mainBtn};
    border-radius: ${props => props.theme.radii[2]}px;

    color: ${props => props.theme.colors.mainWhite};
    background-color: ${props => props.theme.colors.mainBtn};
  }
`;
export const LangBtnUk = styled.button`
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[0]}px;

  border: 1px solid
    ${props =>
      props.colorValue
        ? props.theme.colors.mainBtn
        : props.theme.colors.cancelBtnColor};
  border-radius: ${props => props.theme.radii[2]}px;

  color: ${props =>
    props.colorValue
      ? props.theme.colors.mainWhite
      : props.theme.colors.cancelBtnColor};
  background-color: ${props =>
    props.colorValue
      ? props.theme.colors.mainBtn
      : props.theme.colors.mainWhite};
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.mainBtn};
    border-radius: ${props => props.theme.radii[2]}px;

    color: ${props => props.theme.colors.mainWhite};
    background-color: ${props => props.theme.colors.mainBtn};
  }
`;
