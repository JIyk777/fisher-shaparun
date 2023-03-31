import styled from 'styled-components';

export const AuthBarContainer = styled.div`
  display: flex;
`;

export const AuthBarText = styled.span`
  color: ${props => props.theme.colors.secondTextColor};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.lineHeights[0]}px;
`;
