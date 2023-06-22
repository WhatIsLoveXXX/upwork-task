import { checkAccessTokenExists } from "./user";

export default function authHeader(): Record<string, string> {
  try {
    const accessToken = checkAccessTokenExists();

    return !!accessToken ? { Authorization: "Bearer " + accessToken } : {};
  } catch (e) {
    return {};
  }
}
