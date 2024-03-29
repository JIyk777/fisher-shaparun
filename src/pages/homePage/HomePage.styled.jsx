import styled from 'styled-components';

export const HeaderSection = styled.div`
  background-color: ${props => props.theme.colors.mainWhite};

  @media screen and (max-width: 479px) {
    position: fixed;
    width: 100%;
  }
`;
export const PostsSection = styled.div`
  padding-top: ${props => props.theme.space[3]}px;
  @media screen and (max-width: 479px) {
    width: 100%;
    padding-top: ${props => props.theme.space[17]}px;
  }
`;

export const AddNewPondBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.space[3]}px 0;

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
    width: 240px;
  }
`;
