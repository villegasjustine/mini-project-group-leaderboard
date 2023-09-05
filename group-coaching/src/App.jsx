import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import { ExerciseProvider } from "./context/ExerciseContext";
import NavBarMUI from "./components/NavBarMUI";
import JoMUI from "./components/JoMUI";
import SignoutButton from "./components/SignOutButton";
import { ThemeProvider } from "@mui/material/styles";
import { orangeTheme } from "./themes/orangeTheme";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <ThemeProvider theme={lightTheme}>
        <UserProvider>
          <ExerciseProvider>

            <JoMUI />
            <AppRoutes />

          </ExerciseProvider>
        </UserProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
