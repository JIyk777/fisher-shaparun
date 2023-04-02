import Header from 'components/Header/Header';
import MainNav from 'components/MainNav/MainNav';
import TotalWeight from 'components/TotalWeight/TotalWeight';
import { useMediaQuery } from 'react-responsive';

import Posts from 'components/Posts/Posts';
import Box from 'components/Box';

import { HeaderSection, PostsSection, Container } from './HomePage.styled';

const HomePage = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  // const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <Box height="100%">
      <HeaderSection>
        <Container>
          <Header />
        </Container>
      </HeaderSection>
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
    </Box>
  );
};
export default HomePage;
