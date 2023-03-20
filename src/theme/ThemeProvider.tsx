import React from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

export const colors = {
  purple: "#A43AF6",
  black: "#3E3D3F",
  neutral1: "#222938",
  neutral2: "#161C28",
  primaryClean: "#F5E9FF",
};

const paletteColors = {
  primary: {
    main: colors.purple,
  },
  secondary: {
    main: colors.black,
  },
};

const components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "0px 4px 4px rgba(19, 81, 180, 0.08)",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "27px",
      },
      contained: {
        borderRadius: "100px",
        padding: "10px  24px 10px 24px",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        background: "#FFFBFE",
        boxShadow: "0px 1px 3px 1px #00000026",
        borderRadius: "8px",
        fontSize: "16px",
        fontFamily: "Open Sans",
        fontWeight: "400",
      },
    },
  },
};

export const theme = createTheme({
  palette: paletteColors,
  components,
  typography: {
    fontFamily: "'Fredoka One', cursive",
    allVariants: {
      color: colors.black,
    },
    h1: {
      fontSize: "72px",
      color: colors.purple,
      fontWeight: 400,
      lineHeight: "96%",
    },
    h2: {
      fontWeight: 400,
      fontSize: "64px",
      lineHeight: "95.6%",
      color: colors.black,
    },
    h3: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: "36px",
      lineHeight: "49px",
      color: colors.purple,
    },
    body1: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "33px",
    },
    body2: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "27px",
    },
    button: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#161C28",
      textTransform: "none",
    },
  },
});

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
};

export interface DarkThemeProviderProps {
  children: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    ...paletteColors,
    mode: "dark",
  },
  components,
});

export const DarkThemeProvider = ({ children }: DarkThemeProviderProps) => {
  return (
    <>
      {" "}
      <CssBaseline />
      <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>
    </>
  );
};

export default ThemeProvider;
