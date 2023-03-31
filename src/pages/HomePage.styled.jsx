import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]}px;

  min-height: 100vh;

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

export const Main = styled.div`
  background-color: #e7eaf2;
`;
