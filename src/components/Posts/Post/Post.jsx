import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';

import {
  PostContainer,
  PostImg,
  PostList,
  PostItem,
  PostItemName,
  PostItemValue,
  AddFishingBtn,
  LocationBtn,
} from './Post.styled';

import {
  toggleShowModalAddFishing,
  toggleShowModalMap,
} from 'redux/modal/modalSlice';

import { BsPlus } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const Post = props => {
  const { id, name, location, picture, fishing, fishSpecies } = props.post;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAddBtn = id => {
    dispatch(
      toggleShowModalAddFishing({
        showModal: true,
        riverId: id,
      })
    );
  };
  const handleLocationBtn = location => {
    dispatch(
      toggleShowModalMap({
        showModal: true,
        location: { location },
      })
    );
  };
  return (
    <PostContainer>
      <PostImg src={picture} alt="river" />
      <PostList>
        <PostItem>
          <PostItemName>{t('description.postLocation')}:</PostItemName>
          <PostItemValue>
            <LocationBtn
              type="button"
              onClick={() => handleLocationBtn(location)}
            >
              {location.cityName}, {location.regionName}
              <MdLocationOn size="18" />
            </LocationBtn>
          </PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>{t('description.postName')}:</PostItemName>
          <PostItemValue>{name}</PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>{t('description.postTotalFishing')}:</PostItemName>
          <PostItemValue>{fishing.length}</PostItemValue>
          <AddFishingBtn onClick={() => handleAddBtn(id)}>
            <BsPlus color="#FFFFFF" size="18" />
          </AddFishingBtn>
        </PostItem>
        <PostItem>
          <PostItemName>{t('description.postFishSpecies')}:</PostItemName>
          <PostItemValue>
            {fishSpecies.map(item => item).join(', ')}
          </PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>{t('description.postTotalWeight')}:</PostItemName>
          <PostItemValue>
            {fishing
              .reduce((acc, item) => {
                return acc + item.weight;
              }, 0)
              .toFixed(2)}
          </PostItemValue>
        </PostItem>
      </PostList>
    </PostContainer>
  );
};

export default Post;
