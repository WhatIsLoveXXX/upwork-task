import { Box, Button } from "@mui/material";

const Navigation = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      margin="40px 0"
      maxWidth="400px"
    >
      <Button
        variant="text"
        color="inherit"
        sx={{
          textTransform: "initial",
          padding: "4px 8px",
        }}
      >
        Privacy policy
      </Button>
      <Button
        variant="text"
        color="inherit"
        sx={{
          textTransform: "initial",
          padding: "4px 8px",
        }}
      >
        Terms of use
      </Button>
      <Button
        variant="text"
        color="inherit"
        sx={{
          textTransform: "initial",
          padding: "4px 8px",
        }}
      >
        Contact us
      </Button>
    </Box>
  );
};

export default Navigation;
