import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;

// extraReducers: {
//   [register.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//   },
//   [register.rejected](state, action) {
//     state.error = action.payload;
//     state.isLoading = false;
//   },
//   [logIn.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//   },
//   [logOut.fulfilled](state) {
//     state.user = { name: null, email: null };
//     state.token = null;
//     state.isLoggedIn = false;
//   },
//   [refreshUser.pending](state) {
//     state.isRefreshing = true;
//   },
//   [refreshUser.fulfilled](state, action) {
//     state.user = action.payload;
//     state.isLoggedIn = true;
//     state.isRefreshing = false;
//   },
//   [refreshUser.rejected](state) {
//     state.isRefreshing = false;
//   },
// },
