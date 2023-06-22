import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const data = await authService.login(email, password);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "The email or password you entered don’t match"
      );
    }
  }
);
