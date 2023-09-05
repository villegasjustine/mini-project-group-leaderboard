import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const orangeTheme = createTheme({
  palette: {
    primary: { main: "#e57620", contrastText: "#fdf4e2" },
    secondary: { main: "#2673de", contrastText: "#bcdeff" },
  },
  typography: {
    fontFamily: "Segoe UI Emoji",
    fontSize: 12,
    h1: { fontSize: 20 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
  
});
