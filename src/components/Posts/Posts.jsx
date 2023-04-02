import Post from './Post/Post';
import { PostsContainer } from './Posts.styled';
import { useSelector } from 'react-redux';
import { postsSelectors } from 'redux/postsStore/postsSelectors';

// const allPosts = [
//   {
//     id: '1',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 15,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 25,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 10,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
//   {
//     id: '2',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 5,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 8,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 15,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
//   {
//     id: '3',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 8,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 7,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 14,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
//   {
//     id: '3',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 8,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 7,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 14,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
//   {
//     id: '3',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 8,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 7,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 14,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
//   {
//     id: '3',
//     name: 'River',
//     location: {
//       cityName: 'Jornishe',
//       latitude: '49.06313',
//       longitude: '29.082062',
//     },
//     picture:
//       'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
//     fishing: [
//       {
//         date: '02.04.2023',
//         weight: 8,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
//       },
//       {
//         date: '01.04.2023',
//         weight: 7,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
//       },
//       {
//         date: '03.04.2023',
//         weight: 14,
//         fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//         img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
//       },
//     ],
//     fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
//   },
// ];

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
