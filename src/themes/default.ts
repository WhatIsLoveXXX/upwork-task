import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brown: {
      400: string;
      500: string;
    };
    black: {
      100: string;
    };
  }
  interface PaletteOptions {
    brown: {
      400: string;
      500: string;
    };
    black: {
      100: string;
    };
  }
}

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      '"Noto Sans"',
      '"Ubuntu"',
      '"Helvetica Neue"',
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollBehavior: "smooth",
        },
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          fontFamily: [
            '"Noto Sans"',
            '"Ubuntu"',
            '"Helvetica Neue"',
            "sans-serif",
          ].join(","),
          height: "100%",
          overflowY: "scroll",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#BA1A1A",
    },
    background: {
      default: "#f8f8f8",
    },
    brown: {
      400: "#BAA182",
      500: "#846E54",
    },
    grey: {
      100: "#4D4D4D",
      200: "#7B7B7B",
      300: "#46416D",
      900: "#1C1B1F",
    },
    black: {
      100: "#2A2118",
    },
  },
});

export default theme;
