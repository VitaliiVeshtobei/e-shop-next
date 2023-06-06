import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, registration } from './operations';

const initialState = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  role: '',
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRegister: false,
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
        state.isRegister = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
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
        state.error = action.payload?.message || action.error.message;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload?.message || action.error.message;
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state) => {
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
        state.error = action.payload?.message || action.error.message;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { setTokenAccess, setTokenRefresh } = userSlice.actions;
