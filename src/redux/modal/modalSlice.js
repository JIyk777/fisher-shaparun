import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  riverId: '',
  showModalAddFishing: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddFishing(state, action) {
      state.showModalAddFishing = action.payload.showModal;
      state.riverId = action.payload.riverId;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModalAddFishing } = modalSlice.actions;
