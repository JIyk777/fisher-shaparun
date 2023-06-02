import styled from 'styled-components';

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
  
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

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
