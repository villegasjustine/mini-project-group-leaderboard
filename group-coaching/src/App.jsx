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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <ExerciseProvider>
        Group Coaching

        <JoMUI/>
        <NavBar />
        <AppRoutes />

        </ExerciseProvider>
      </UserProvider>
    </>
  );
}

export default App;
