import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export const authReducer = authSlice.reducer;
