import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isLoading: false,
  posts: [
    {
      id: '1',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
      fishing: [
        {
          date: '02.04.2023',
          weight: 15,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 25,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 10,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
    {
      id: '2',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://www.macmillandictionary.com/external/slideshow/full/152264_full.jpg',
      fishing: [
        {
          date: '02.04.2023',
          weight: 5,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 8,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 15,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
    {
      id: '3',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://cdn.firstcry.com/education/2022/04/01193101/1920397988.jpg',
      fishing: [
        {
          date: '02.04.2023',
          weight: 8,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 7,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 14,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
    {
      id: '4',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Duck_River_reflections_-_20130915-143_HDR_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0',
      fishing: [
        {
          date: '02.04.2023',
          weight: 8,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 7,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 14,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
    {
      id: '5',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://www.sciencenews.org/wp-content/uploads/2022/10/101722_jc_river-heat-waves_feat.jpg',
      fishing: [
        {
          date: '02.04.2023',
          weight: 8,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 7,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 14,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
    {
      id: '6',
      name: 'River',
      location: {
        cityName: 'Jornishe',
        latitude: '49.06313',
        longitude: '29.082062',
      },
      picture:
        'https://www.riverlevelzone.co.uk/wp-content/uploads/2020/10/River-Wharfe.jpg',
      fishing: [
        {
          date: '02.04.2023',
          weight: 8,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg',
        },
        {
          date: '01.04.2023',
          weight: 30,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://a-z-animals.com/media/2022/04/shutterstock_1666284073.jpg',
        },
        {
          date: '03.04.2023',
          weight: 14,
          fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
          img: 'https://e360.yale.edu/assets/site/BakerRiver_Chile_Louis-Vest-Flickr_web.jpg',
        },
      ],
      fishSpecies: ['Crucian', 'Carp', 'Roach', 'Bream'],
    },
  ],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggle(state, action) {
      state.isLoading = action.payload;
    },
  },
});

const persistConfig = {
  key: 'fishing-shaparun/posts',
  storage,
};

export const persistedPostsReducer = persistReducer(
  persistConfig,
  postsSlice.reducer
);

export const postsReducer = postsSlice.reducer;
export const { toggle } = postsSlice.actions;
