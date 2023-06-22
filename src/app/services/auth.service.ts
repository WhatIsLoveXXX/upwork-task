import { API_URL } from "../constants/config";
import { LoginResponse } from "../types/auth";

const login = async (email: string, password: string) => {
  const response = await fetch(API_URL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = (await response.json()) as LoginResponse;

  if (response.ok) {
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
  } else {
    throw new Error(`status code ${response.status}`);
  }

  return data;
};

const authService = {
  login,
};

export default authService;
