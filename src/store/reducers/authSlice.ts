import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      console.log('Payload', payload);
      state.user = payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

const {actions, reducer} = authSlice;

export const {login, logout} = actions;

export const getAuthUser = (state: any) => state.auth.user;

export default reducer;
