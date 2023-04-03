import styled from 'styled-components';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;

  margin-top: ${props => props.theme.space[4]}px;

  padding-bottom: ${props => props.theme.space[4]}px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    margin-top: ${props => props.theme.space[1]}px;
    margin-left: ${props => props.theme.space[10]}px;

    max-height: 775px;

    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const AddNewPondBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.space[3]}px 0;
  margin-top: ${props => props.theme.space[4]}px;

  font-size: 18px;
  line-height: 27px;

  border: 0;
  border-radius: ${props => props.theme.radii[2]}px;

  color: ${props => props.theme.colors.mainWhite};
  background-color: ${props => props.theme.colors.mainBtn};

  cursor: pointer;

  box-shadow: 0px 6px 12px ${props => props.theme.colors.btnShadow};

  @media screen and (max-width: 479px) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    margin-left: auto;
    margin-right: auto;
    width: 240px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    margin-left: auto;
    margin-right: 0;
    margin-top: -${props => props.theme.space[12]}px;
    width: 240px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    margin-left: auto;
    margin-right: 0;
    margin-top: 0;
    padding: ${props => props.theme.space[1]}px 0;
    width: 240px;
  }
`;
