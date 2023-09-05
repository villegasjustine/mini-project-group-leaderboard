import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#fefffe',
          paper: '#bfd7ea',
        },
      },
      overrides: {
        MuiAppBar: {
          colorInherit: {
            backgroundColor: '#FF6663',
            color: '#fff',
          },
        },
      },
      props: {
        MuiAppBar: {
          color: 'inherit',
        },
      },
    }
  
);