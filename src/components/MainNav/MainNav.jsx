import { Nav, NavItem, NavLink, NavText } from './MainNav.styled';

import MenuIcon from 'components/MenuIcon/MenuIcon';

import { MdHome } from 'react-icons/md';
// import { ImStatsDots } from 'react-icons/im';

import { useTranslation } from 'react-i18next';

import { useMediaQuery } from 'react-responsive';

const MainNav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const { t } = useTranslation();
  return (
    <Nav>
      <NavItem>
        {isMobile && (
          <NavLink href="">
            <MenuIcon width={1} height={1}>
              <MdHome color="#FFFFFF" size="28px" />
            </MenuIcon>
          </NavLink>
        )}
        {isTablet && (
          <NavLink href="">
            <MenuIcon width={0} height={0} borderRadius={0}>
              <MdHome color="#FFFFFF" size="16px" />
            </MenuIcon>
            <NavText>{t('description.navHome')}</NavText>
          </NavLink>
        )}
      </NavItem>
      {/* <NavItem>
        {isMobile && (
          <NavLink href="">
            <MenuIcon width={1} height={1}>
              <ImStatsDots color="#FFFFFF" size="18px" />
            </MenuIcon>
          </NavLink>
        )}
        {isTablet && (
          <NavLink href="">
            <MenuIcon width={0} height={0} borderRadius={0}>
              <ImStatsDots color="#FFFFFF" size="10px" />
            </MenuIcon>
            <NavText>Statistics</NavText>
          </NavLink>
        )}
      </NavItem> */}
    </Nav>
  );
};
export default MainNav;
