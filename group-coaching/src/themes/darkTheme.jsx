import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#19d264',
        },
        secondary: {
          main: '#f50057',
        },
        divider: 'rgba(255,255,255,0.12)',
      },
      typography: {
        fontFamily: 'Roboto',
        button: {
          fontSize: '0.9rem',
        },
      },
  
});