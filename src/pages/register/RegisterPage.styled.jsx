import styled from 'styled-components';

export const RegisterSection = styled.div`
  background-color: ${props => props.theme.colors.mainWhite};

  @media screen and (max-width: 479px) {
    position: fixed;
    width: 100%;
  }
`;