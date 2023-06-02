import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.backDrop};
  @media screen and (max-width: 479px) {
    margin-top: 60px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    overflow-y: auto;
    overflow-x: hidden;

    padding-top: 60px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    padding-top: 0;
  }

  z-index: 50000;
`;

export const ModalContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.space[5]}px
    ${props => props.theme.space[10]}px;

  background: #ffffff;

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}px) {
    margin: auto;

    width: 480px;

    border-radius: ${props => props.theme.radii[2]}px;
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

  box-shadow: 1px 1px 14px ${props => props.theme.colors.btnShadow};

  @media screen and (max-width: 479px) {
    display: none;
  }
`;
