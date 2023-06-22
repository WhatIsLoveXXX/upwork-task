import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../types/notification";
import { fetchNotifications } from "../actions/notificationsActions";

interface NotificationsState {
  notification: Notification | null;
  error: string;
  isLoading: boolean;
}

const initialState: NotificationsState = {
  notification: null,
  error: "",
  isLoading: true,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notification = action.payload[0];
      state.error = "";
      state.isLoading = false;
    });
    builder.addCase(fetchNotifications.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});

export default notificationsSlice.reducer;
