import { setAuthHeader } from '@/axios/axiosDefault';
import { clearAuthHeader } from '@/axios/axiosDefault';
import { instanceNew } from '@/axios/axiosDefault';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk('user/create', async (credentials, { rejectWithValue }) => {
  try {
    await instanceNew.post('/api/user/create', credentials);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const res = await instanceNew.post('/api/user/login', credentials);
    setAuthHeader(res.data.accessToken);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await instanceNew.patch('/api/user/logout');
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk('user/refresh', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.user.accessToken;

  if (persistedToken === null) {
    return rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await instanceNew.get('/api/user/get-user');
    return res.data;
  } catch (error) {
    if (error.message === 'Network Error') {
      toast.error('Something went wrong, please try again later');
    }
    return rejectWithValue(error.response.data);
  }
});
