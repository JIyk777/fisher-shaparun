import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;
`;

export const LogoImg = styled.img`
  width: ${props => props.theme.space[15]}px;
  border-radius: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    width: ${props => props.theme.space[20]}px;
  }
`;

export const IconText = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes[3]}px;
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;
