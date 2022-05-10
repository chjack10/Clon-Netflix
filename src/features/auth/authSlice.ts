import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewUser } from './models/NewUser';
import { User } from './models/User';
import authService from '../../service/authService';
import { LoginUser } from './models/LoginUser';

interface AuthState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;

  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  user: null,
  isAuthenticated: false,
};

export const register = createAsyncThunk(
  'auth/register',
  async (user: NewUser, thunkApi) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkApi.rejectWithValue('Error al registrar!');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user: LoginUser, thunkApi) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkApi.rejectWithValue('Error al ingresar!');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })

      // LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;
