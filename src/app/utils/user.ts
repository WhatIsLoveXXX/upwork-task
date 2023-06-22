export const checkAccessTokenExists = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const accessTokenValue: string | null = accessToken
      ? JSON.parse(accessToken)
      : null;

    return accessTokenValue;
  } catch (e) {
    return null;
  }
};

export const isUserAuthenticated = () => {
  const accessToken = checkAccessTokenExists();

  return !!accessToken;
};
