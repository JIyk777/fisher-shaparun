import {
  PostContainer,
  PostImg,
  PostList,
  PostItem,
  PostItemName,
  PostItemValue,
} from './Post.styled';

const Post = props => {
  const { id, name, location, picture, fishing, fishSpecies } = props.post;
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
