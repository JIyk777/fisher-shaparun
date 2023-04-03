import Header from 'components/Header/Header';
import MainNav from 'components/MainNav/MainNav';
import TotalWeight from 'components/TotalWeight/TotalWeight';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import Posts from 'components/Posts/Posts';
import Box from 'components/Box';
import ModalAddFishing from 'components/Modal/ModalAddFishing/ModalAddFishing';

import { modalSelectors } from 'redux/modal/modalSelectors';

import { HeaderSection, PostsSection, Container } from './HomePage.styled';

const HomePage = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isOnlyMobile = useMediaQuery({ maxWidth: 479 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const showModal = useSelector(modalSelectors.showModalAddFishing);
  return (
    <Box height="100%">
      <HeaderSection>
        <Container>
          <Header />
        </Container>
      </HeaderSection>
      {showModal && isOnlyMobile ? (
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

      {showModal && <ModalAddFishing />}
    </Box>
  );
};
export default HomePage;
