import { useDispatch } from 'react-redux';

import {
  PostContainer,
  PostImg,
  PostList,
  PostItem,
  PostItemName,
  PostItemValue,
  AddFishingBtn,
} from './Post.styled';

import { toggleShowModalAddFishing } from 'redux/modal/modalSlice';

import { BsPlus } from 'react-icons/bs';

const Post = props => {
  const { name, location, picture, fishing, fishSpecies } = props.post;

  const dispatch = useDispatch();

  const handleAddBtn = () => {
    dispatch(toggleShowModalAddFishing(true));
  };
  return (
    <PostContainer>
      <PostImg src={picture} alt="river" />
      <PostList>
        <PostItem>
          <PostItemName>Location:</PostItemName>
          <PostItemValue>{location.cityName}</PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>Name:</PostItemName>
          <PostItemValue>{name}</PostItemValue>
        </PostItem>
        <PostItem>
          <PostItemName>Total Fishing:</PostItemName>
          <PostItemValue>{fishing.length}</PostItemValue>
          <AddFishingBtn onClick={handleAddBtn}>
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
            {fishing.reduce((acc, item) => {
              return acc + item.weight;
            }, 0)}
          </PostItemValue>
        </PostItem>
      </PostList>
    </PostContainer>
  );
};

export default Post;
