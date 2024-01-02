import styled from 'styled-components';

export const RegisterSection = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.mainWhite};
  min-height: 100vh;

  @media screen and (max-width: 479px) {
    position: fixed;
    width: 100%;
  }
`;