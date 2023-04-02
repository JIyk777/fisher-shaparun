import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseModalBtn = styled.button`
  padding: ${props => props.theme.space[2]}px;

  border: 0;
  border-radius: ${props => props.theme.radii[1]}px;

  color: ${props => props.theme.colors.mainWhite};
  background-color: ${props => props.theme.colors.mainBtn};

  cursor: pointer;

  box-shadow: 0px 6px 12px ${props => props.theme.colors.btnShadow};

  @media screen and (max-width: 479px) {
    width: 200px;
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
