import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Box, Button, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../store/actions/authActions";
import { StyledButton, StyledTextField } from "./styles";

interface FormData {
  email: string;
  password: string;
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      reset();
      navigate("/");
    } catch (error) {
      setError("password", { type: "custom", message: error as string });
      setError("email", { type: "custom" });
    }
  });

  return (
    <Box
      component="form"
      noValidate
      display="flex"
      flexDirection="column"
      onSubmit={onSubmit}
    >
      <StyledTextField
        label="Username"
        type="email"
        size="small"
        sx={{ mb: "28px" }}
        InputLabelProps={{
          shrink: true,
          disableAnimation: true,
          variant: "standard",
        }}
        InputProps={{
          endAdornment: !!errors.email ? (
            <InputAdornment position="end">
              <ErrorOutlineOutlinedIcon color="error" />
            </InputAdornment>
          ) : null,
        }}
        {...register("email", {
          required: "Email field is required",
          pattern: {
            value: emailRegex,
            message: "Invalid email format",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <StyledTextField
        label="Password"
        type="password"
        size="small"
        InputLabelProps={{
          shrink: true,
          disableAnimation: true,
          variant: "standard",
        }}
        InputProps={{
          endAdornment: !!errors.password ? (
            <InputAdornment position="end">
              <ErrorOutlineOutlinedIcon color="error" />
            </InputAdornment>
          ) : null,
        }}
        {...register("password", {
          required: "Password field is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        variant="text"
        color="inherit"
        sx={{
          maxWidth: "163px",
          textTransform: "initial",
          padding: 0,
          mb: "50px",
        }}
      >
        Forgot your password?
      </Button>
      <StyledButton type="submit" variant="contained">
        Log in
      </StyledButton>
    </Box>
  );
};

export default LoginForm;
