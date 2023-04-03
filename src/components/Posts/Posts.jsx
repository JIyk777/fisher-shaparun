import Post from './Post/Post';
import { PostsContainer, AddNewPondBtn } from './Posts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { postsSelectors } from 'redux/postsStore/postsSelectors';
import { toggleShowModalAddPond } from 'redux/modal/modalSlice';
import Box from 'components/Box';

const Posts = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(postsSelectors.getPosts);

  const handleAddBtn = id => {
    dispatch(toggleShowModalAddPond(true));
  };
  return (
    <Box position="relative" width="100%">
      <AddNewPondBtn type="button" onClick={handleAddBtn}>
        ADD NEW POND
      </AddNewPondBtn>
      <PostsContainer>
        {allPosts.map(post => (
          <Post post={post} key={post.id}></Post>
        ))}
      </PostsContainer>
    </Box>
  );
};

export default Posts;
