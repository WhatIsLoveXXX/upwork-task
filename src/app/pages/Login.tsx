import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../../assets/images/cybellum-logo.svg";
import bigPicture from "../../assets/images/dig-twins.svg";
import Image from "../components/Image/Image";
import LoginForm from "../components/Login/LoginForm/LoginForm";
import Navigation from "../components/Login/Navigation/Navigation";

const Login = () => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex" justifyContent="center" flexGrow="1">
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flexGrow="1"
          >
            <Box>
              <Image src={logo} />
              <Typography
                variant="h1"
                letterSpacing="-0.5px"
                margin="24px 0 36px 0"
                sx={{
                  fontSize: { xs: "32px", md: "56px", xl: "56px" },
                }}
              >
                Welcome to the <br /> Product Security Platform
              </Typography>
              <Box maxWidth="400px">
                <LoginForm />
              </Box>
            </Box>
          </Box>
          <Navigation />
        </Box>
        {isXl ? <Image src={bigPicture} width="800px" /> : null}
      </Box>
    </Box>
  );
};

export default Login;
