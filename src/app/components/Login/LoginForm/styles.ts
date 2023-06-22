import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  label: {
    marginLeft: "17px",
    fontSize: "14px",
    letterSpacing: "0.35px",
    fontWeight: 400,
    lineHeight: "20px",
    position: "initial",
    transform: "none",
    color: theme.palette.grey[100],
  },
  input: {
    padding: "12px 16px",
    color: theme.palette.grey[900],
  },
  fieldset: {
    top: 0,
    borderColor: theme.palette.grey[200],
  },
  legend: {
    display: "none",
  },
  "p.Mui-error": {
    margin: "5px 0",
  },
  ".MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[300],
      borderWidth: "1px",
    },
  },
  "label.Mui-focused": {
    color: theme.palette.grey[300],
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.brown[400],
  color: theme.palette.black[100],
  textTransform: "initial",
  "&:hover": {
    backgroundColor: theme.palette.brown[500],
    boxShadow: "initial",
  },
}));
