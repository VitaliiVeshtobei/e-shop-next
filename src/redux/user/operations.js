import { setAuthHeader } from '@/axios/axiosDefault';
import { clearAuthHeader } from '@/axios/axiosDefault';
import { instanceNew } from '@/axios/axiosDefault';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

export const registration = createAsyncThunk('user/create', async (credentials, { rejectWithValue }) => {
  try {
    await instanceNew.post('/api/user/create', credentials);
    toast.info('Реєстрація успішна! Будь ласка, підтвердьте свою електронну адресу');
  } catch (error) {
    const errNot = error.response.data.message;

    if (errNot.includes('E11000 duplicate key error collection')) {
      toast.error('Ця електронна адреса вже використовується');
    }

    if (errNot === 'Email is not verified, but already registered') {
      toast.warning(
        'Ваша електронна пошта не підтверджена, але вже зареєстрована. Щоб завершити реєстрацію, перевірте свою електронну пошту'
      );
    }
    if (error.message === 'Network Error') {
      toast.error('Щось пішло не так, спробуйте пізніше');
    }
    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const res = await instanceNew.post('/api/user/login', credentials);
    setAuthHeader(res.data.accessToken);
    toast.success(`Вітаємо, ${res.data.name}!`);
    return res.data;
  } catch (error) {
    const errNot = error.response.data.message;
    if (errNot === 'Invalid email address or password') {
      toast.error('Ваша електронна пошта або пароль неправильні, перевірте їх і повторіть спробу');
    }
    if (errNot.includes('Please confirm the mail')) {
      toast.warning(
        'Вашу електронну адресу не підтверджено, будь ласка, підтвердьте свою електронну адресу та повторіть спробу'
      );
    }
    if (error.message === 'Network Error') {
      toast.error('Щось пішло не так, спробуйте пізніше');
    }
    return rejectWithValue(error.response.data);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await instanceNew.patch('/api/user/logout');
    clearAuthHeader();
    toast.success('Ви вийшли');
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
