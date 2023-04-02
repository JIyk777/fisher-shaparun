import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.colors.backDrop};

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  z-index: 50000;
`;

export const ModalContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.space[5]}px
    ${props => props.theme.space[10]}px;

  border-radius: 3px;

  background: #ffffff;

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    width: 480px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    width: 540px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    width: 540px;
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: -13px;
  right: -13px;

  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.mainBtn};

  border: 0;
  border-radius: 100%;

  text-decoration: none;
  cursor: pointer;

  padding: 0;

  transition: transform 0.5s;
  &:hover {
    border-radius: 100%;

    transform: rotate(360deg);
    opacity: 1;
  }
  &:active {
    transform: scale(0.9);
  }

  box-shadow: 0px 6px 12px ${props => props.theme.colors.btnShadow};

  @media screen and (max-width: 479px) {
    display: none;
  }
`;
