import { createSlice } from '@reduxjs/toolkit';
// import {
//   addTransaction,
//   updateTransactionsNew,
//   updateTransactions,
// } from './financeOperation';
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
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
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
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
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
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
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
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
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
        'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg',
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
  ],
};

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggle(state, action) {
      state.isLoading = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder

  //     .addCase(updateTransactionsNew.pending, (state, action) => {
  //       state.error = action.payload;
  //     })
  //     .addCase(updateTransactionsNew.rejected, (state, action) => {
  //       state.error = action.payload;
  //     })
  //     .addCase(updateTransactionsNew.fulfilled, (state, action) => {
  //       state.data = action.payload?.transactions;
  //       state.totalBalance = action.payload?.totalBalance;
  //       state.totalQuantityTransactions = action.payload?.quantityTransactions;
  //       state.isLoggedIn = true;
  //       state.isLoading = false;
  //     })

  //     .addCase(updateTransactions.pending, handlePending)
  //     .addCase(updateTransactions.rejected, handleRejected)
  //     .addCase(updateTransactions.fulfilled, (state, action) => {
  //       state.data = action.payload?.transactions;
  //       state.totalBalance = action.payload?.totalBalance;
  //       state.totalQuantityTransactions = action.payload?.quantityTransactions;
  //       state.isLoggedIn = true;
  //       state.isLoading = false;
  //     })

  //     .addCase(addTransaction.pending, handlePending)
  //     .addCase(addTransaction.rejected, handleRejected)
  //     .addCase(addTransaction.fulfilled, (state, action) => {
  //       state.data = action.payload.rdyTransactions;
  //       state.totalBalance = action.payload.totalBalance;
  //       state.totalQuantityTransactions = action.payload.updatedCount;
  //       state.isLoading = false;
  //     });
  // },
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
