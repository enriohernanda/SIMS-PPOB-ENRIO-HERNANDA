import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const BASE_URL = '/api';
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    /* 
      const response = await axios.post(`${BASE_URL}/registration`, userData);
      return response.data;
      */

    console.log('Menjalankan Simulasi Registrasi:', userData);
    return { status: 0, message: 'Registrasi Berhasil', data: null };
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Terjadi kesalahan pada koneksi server' });
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    /*
      const response = await axios.post(`${BASE_URL}/login`, userData);
      if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token);
      }
      return response.data;
      */
    console.log('Menjalankan Simulasi Masuk:', userData);
    const tokenSimulasi = 'token_rahasia_simulasi_12345';
    localStorage.setItem('token', tokenSimulasi);
    return { status: 0, message: 'Login Berhasil', data: { token: tokenSimulasi } };
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Gagal masuk, periksa kembali email dan kata sandi Anda' });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'idle',
    error: null,
    message: null,
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
      state.message = null;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
        state.token = action.payload.data.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetStatus, logoutUser } = authSlice.actions;
export default authSlice.reducer;
