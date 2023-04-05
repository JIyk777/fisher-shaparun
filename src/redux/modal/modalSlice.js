import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  riverId: '',
  location: {},
  showModalAddFishing: false,
  showModalAddPond: false,
  showModalMap: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddFishing(state, action) {
      state.showModalAddFishing = action.payload.showModal;
      state.riverId = action.payload.riverId;
    },
    toggleShowModalAddPond(state, action) {
      state.showModalAddPond = action.payload;
    },
    toggleShowModalMap(state, action) {
      console.log(action.payload);
      state.showModalMap = action.payload.showModal;
      state.location = { ...action.payload.location.location };
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleShowModalAddFishing,
  toggleShowModalAddPond,
  toggleShowModalMap,
} = modalSlice.actions;
