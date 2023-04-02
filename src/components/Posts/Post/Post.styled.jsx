import styled from 'styled-components';

export const PostContainer = styled.div`
  padding: ${props => props.theme.space[2]}px;

  border-radius: ${props => props.theme.radii[1]}px;

  background-color: ${props => props.theme.colors.mainWhite};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    width: calc((100% - 32px) / 3);
  }
`;

export const PostImg = styled.img`
  border-radius: ${props => props.theme.radii[1]}px;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[2]}px;

  margin-top: ${props => props.theme.space[2]}px;
`;

export const PostItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: ${props => props.theme.space[1]}px;

  border-bottom: 1px solid ${props => props.theme.colors.mainBgColor};
`;

export const PostItemName = styled.p`
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

export const PostItemValue = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[1]}px;
  justify-content: end;
  font-size: ${props => props.theme.fontSizes[1]}px;
  color: ${props => props.theme.colors.secondTextColor};
`;
