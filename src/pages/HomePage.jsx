import Header from 'components/Header/Header';
import MainNav from 'components/MainNav/MainNav';
import TotalWeight from 'components/TotalWeight/TotalWeight';

import { HeaderSection, PostsSection, Container } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HeaderSection>
        <Container>
          <Header />
        </Container>
      </HeaderSection>
      <PostsSection>
        <Container>
          <MainNav />
          <TotalWeight />
        </Container>
      </PostsSection>
    </>
  );
};
export default HomePage;
