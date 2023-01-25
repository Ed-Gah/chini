import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.user = payload;
    },
  },
});

const {actions, reducer} = authSlice;

export const {login} = actions;

export default reducer;
