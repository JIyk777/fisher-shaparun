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

  @media screen and (max-width: 479px) {
    min-height: 175px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    height: 280px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    height: 225px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    height: 160px;
  }
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

export const AddFishingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  width: 18px;
  height: 18px;

  background-color: ${props => props.theme.colors.mainBtn};

  border: 0;
  border-radius: 100%;

  cursor: pointer;

  box-shadow: 0px 3px 6px ${props => props.theme.colors.btnShadow};

  &:hover,
  &:focus {
    outline: 0;
  }
`;

export const LocationBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: ${props => props.theme.colors.secondTextColor};
  background-color: #ffffff;
  border: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.mainAccentColor};
  }
  &:hover svg,
  &:focus svg {
    color: ${props => props.theme.colors.mainAccentColor};
  }
  svg {
    color: ${props => props.theme.colors.mainBtn};
  }
`;
