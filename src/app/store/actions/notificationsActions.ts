import { createAsyncThunk } from "@reduxjs/toolkit";
import notificationsService from "../../services/notifications.service";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await notificationsService.getNotifications();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something went wrong" as string);
    }
  }
);
