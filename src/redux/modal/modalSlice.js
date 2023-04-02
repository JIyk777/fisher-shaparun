import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalAddFishing: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleShowModalAddFishing(state, action) {
      state.showModalAddFishing = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModalAddFishing } = modalSlice.actions;
