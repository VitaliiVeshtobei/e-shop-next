import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../axios/axiosDefault';

export const getCategories = createAsyncThunk('products/categories', async (_, { rejectWithValue }) => {
  try {
    const apiUrl = '/api/groups/list';
    const result = await instance.get(apiUrl);
    return result.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
