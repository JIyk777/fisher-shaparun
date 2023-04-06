import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import Box from 'components/Box';
import totalWeight from 'utils/totalWeight';

import { Title, Sum } from './TotalWeight.styled';

import { postsSelectors } from 'redux/postsStore/postsSelectors';

const TotalWeight = () => {
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const allPosts = useSelector(postsSelectors.getPosts);

  const { t } = useTranslation();

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
      <Title>{t('description.totalWeightTitle')}</Title>
      <Sum>
        {totalWeight(allPosts)} {t('description.totalValue')}
      </Sum>
    </Box>
  );
};

export default TotalWeight;
