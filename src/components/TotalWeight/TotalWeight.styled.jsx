import styled from 'styled-components';

export const Title = styled.p`
  font-size: ${props => props.theme.fontSizes[0]}px;
  line-height: ${props => props.theme.lineHeights[0]}px;
  color: ${props => props.theme.colors.secondTextColor};
`;
export const Sum = styled.span`
  display: block;
  margin-top: ${props => props.theme.space[3]}px;
  font-family: ${props => props.theme.fontFamilies.secondFontFamily};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes[6]}px;
  line-height: ${props => props.theme.lineHeights[2]}px;
`;
