import { API_URL } from "../constants/config";
import { Notification } from "../types/notification";
import authHeader from "../utils/auth-header";

const getNotifications = async () => {
  const response = await fetch(API_URL + "notifications", {
    method: "GET",
    headers: authHeader(),
  });

  const data = (await response.json()) as Notification[];

  if (!response.ok) {
    throw new Error(`status code ${response.status}`);
  }

  return data;
};

const notificationsService = {
  getNotifications,
};

export default notificationsService;
