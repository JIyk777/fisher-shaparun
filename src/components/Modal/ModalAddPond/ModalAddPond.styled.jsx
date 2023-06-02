import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    padding-bottom: 60px;
  }
`;

export const CloseModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.space[3]}px 0;
  margin-top: ${props => props.theme.space[6]}px;

  font-size: 18px;
  line-height: 27px;

  border: 1px solid ${props => props.theme.colors.cancelBtnColor};
  border-radius: ${props => props.theme.radii[2]}px;

  color: ${props => props.theme.colors.cancelBtnColor};
  background-color: ${props => props.theme.colors.mainWhite};

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

export const ModalTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: ${props => props.theme.fontWeights.normal};
  @media screen and (max-width: 479px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: ${props => props.theme.lineHeights[2]}px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;
