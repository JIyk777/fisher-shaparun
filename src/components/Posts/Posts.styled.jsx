import styled from 'styled-components';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;

  margin-top: ${props => props.theme.space[4]}px;

  padding-bottom: ${props => props.theme.space[4]}px;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    margin-top: ${props => props.theme.space[10]}px;
    margin-left: ${props => props.theme.space[10]}px;
  }
`;
