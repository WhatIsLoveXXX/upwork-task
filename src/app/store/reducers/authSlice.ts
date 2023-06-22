import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { login } from "../actions/authActions";

interface UserState {
  user: User | null;
  error: string;
}

const initialState: UserState = {
  user: null,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
