import styled from 'styled-components';

export const AuthBarContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const AuthBarText = styled.p`
  color: ${props => props.theme.colors.secondTextColor};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.lineHeights[1]}px;
`;
export const LogOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0;
  border: 0;
  background-color: transparent;
`
