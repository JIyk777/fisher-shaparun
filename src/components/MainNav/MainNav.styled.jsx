import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;

    margin-top: 40px;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  /* border-radius: 8px; */

  /* background-color: ${props => props.theme.colors.menuBtnColor}; */

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}px) {
    max-width: ${props => props.theme.breakpoints[2]}px;
  }
`;

export const NavText = styled.p`
  display: flex;
  align-items: center;
`;
