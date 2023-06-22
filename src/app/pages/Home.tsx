import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNotifications } from "../store/actions/notificationsActions";

const Home = () => {
  const dispatch = useAppDispatch();
  const { notification, isLoading } = useAppSelector(
    (state) => state.notificationsReducer
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Loading...
      </Box>
    );
  }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {notification?.description}
    </Box>
  );
};

export default Home;
