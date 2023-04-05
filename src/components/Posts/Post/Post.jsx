import { useDispatch } from 'react-redux';

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
          <PostItemName>Location:</PostItemName>
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
          <PostItemName>Name:</PostItemName>
          <PostItemValue>{name}</PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>Total Fishing:</PostItemName>
          <PostItemValue>{fishing.length}</PostItemValue>
          <AddFishingBtn onClick={() => handleAddBtn(id)}>
            <BsPlus color="#FFFFFF" size="18" />
          </AddFishingBtn>
        </PostItem>
        <PostItem>
          <PostItemName>Fish species:</PostItemName>
          <PostItemValue>
            {fishSpecies.map(item => item).join(', ')}
          </PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>Total Weight:</PostItemName>
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
