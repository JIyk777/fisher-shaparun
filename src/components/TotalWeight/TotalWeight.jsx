import { useMediaQuery } from 'react-responsive';

import Box from 'components/Box';

import { Title, Sum } from './TotalWeight.styled';

const TotalWeight = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <Box
      mt={3}
      pl={8}
      pt={2}
      pb={3}
      width={(isDesktop && 6) || (isTablet && 5) || (isMobile && '100%')}
      bg="mainWhite"
      borderRadius={2}
    >
      <Title>Your Total Weight</Title>
      <Sum>24000.00</Sum>
    </Box>
  );
};

export default TotalWeight;
