import { createSlice } from '@reduxjs/toolkit';
import { login, refreshUser, registration } from './operations';

const initialState = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  role: '',
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  error: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokenAccess(state, action) {
      state.accessToken = action.payload;
    },
    setTokenRefresh(state, action) {
      state.refreshToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.error = false;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.name = action.payload.name;
        state.lastName = action.payload.lastName;
        state.phone = action.payload.phone;
        state.role = action.payload.role;
        state.isLoggedIn = true;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.name = action.payload.name;
        state.lastName = action.payload.lastName;
        state.phone = action.payload.phone;
        state.role = action.payload.role;
        state.isLoggedIn = true;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { setTokenAccess, setTokenRefresh } = userSlice.actions;
