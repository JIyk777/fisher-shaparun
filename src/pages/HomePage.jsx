import Header from 'components/Header/Header';

import { Container, Menu, MenuItem } from './HomePage.styled';

import { ReactComponent as HomeBtn } from 'assets/images/svg/homeBtn.svg';
import { ReactComponent as StatBtn } from 'assets/images/svg/statBtn.svg';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Menu>
        <MenuItem>
          <HomeBtn />
        </MenuItem>
        <MenuItem>
          <StatBtn />
        </MenuItem>
      </Menu>
    </Container>
  );
};
export default HomePage;
