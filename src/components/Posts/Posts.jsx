import Post from './Post/Post';
import { PostsContainer } from './Posts.styled';
import { useSelector } from 'react-redux';
import { postsSelectors } from 'redux/postsStore/postsSelectors';

const Posts = () => {
  const allPosts = useSelector(postsSelectors.getPosts);
  return (
    <PostsContainer>
      {allPosts.map(post => (
        <Post post={post} key={post.id}></Post>
      ))}
    </PostsContainer>
  );
};

export default Posts;
