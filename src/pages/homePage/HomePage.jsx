import Header from 'components/Header/Header';
import MainNav from 'components/MainNav/MainNav';
import TotalWeight from 'components/TotalWeight/TotalWeight';
import Container from 'components/Container/Container'

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Posts from 'components/Posts/Posts';
import Box from 'components/Box';
import ModalAddFishing from 'components/Modal/ModalAddFishing/ModalAddFishing';
import ModalAddPond from 'components/Modal/ModalAddPond/ModalAddPond';
import ModalMap from 'components/Modal/ModalMap/ModalMap';
import { modalSelectors } from 'redux/modal/modalSelectors';

import { HeaderSection, PostsSection } from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ minWidth: 320 });
  const isOnlyMobile = useMediaQuery({ maxWidth: 479 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const showModalFishing = useSelector(modalSelectors.showModalAddFishing);
  const showModalPond = useSelector(modalSelectors.showModalAddPond);
  const showModalMap = useSelector(modalSelectors.showModalMap);
  return (
    <Box height="100%">
      <HeaderSection>
        <Container>
          <button onClick={() => navigate('/login')}>Login</button>
          <Header />
        </Container>
      </HeaderSection>
      {showModalFishing && isOnlyMobile ? (
        <></>
      ) : (
        <PostsSection>
          <Container>
            <Box
              display="flex"
              flexDirection={(isDesktop && 'row') || (isMobile && 'column')}
            >
              <div>
                <MainNav />
                <TotalWeight />
              </div>
              <>
                <Posts />
              </>
            </Box>
          </Container>
        </PostsSection>
      )}

      {showModalFishing && <ModalAddFishing />}
      {showModalPond && <ModalAddPond />}
      {showModalMap && <ModalMap />}
    </Box>
  );
};
export default HomePage;
