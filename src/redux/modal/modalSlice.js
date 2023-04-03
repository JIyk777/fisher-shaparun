import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  riverId: '',
  showModalAddFishing: false,
  showModalAddPond: false,
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
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModalAddFishing, toggleShowModalAddPond } =
  modalSlice.actions;
