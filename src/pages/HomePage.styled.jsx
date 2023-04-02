import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[5]}px;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    max-width: ${props => props.theme.breakpoints[0]}px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    max-width: ${props => props.theme.breakpoints[1]}px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    max-width: ${props => props.theme.breakpoints[2]}px;
  }
`;
export const HeaderSection = styled.div`
  background-color: ${props => props.theme.colors.mainWhite};
`;
export const PostsSection = styled.div`
  height: 100%;
  padding-top: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.mainBgColor};
`;
