import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:  'BKT',
  isNotFound: false
};

const document = createSlice({
  name: 'document',
  initialState: initialState,
  reducers: {
    changeDocument: (state, action) => {
      state = (state, action.payload);
    }
  }
});

const { reducer, actions } = document;
export const { changeDocument } = actions;
export default reducer;
