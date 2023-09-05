import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Home from "../pages/Home";
import ExercisesPage from "../pages/ExercisesPage";
import ProtectedRoute from "./ProtectedRoute";
import AccountPage from "../pages/AccountPage";

function AppRoutes(props) {

    return (
      <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<WelcomePage {...props} />} />
        <Route path="Home" element={<ProtectedRoute><Home {...props} /></ProtectedRoute>} />
        <Route path="Exercises" element={<ProtectedRoute><ExercisesPage {...props}/></ProtectedRoute>}/>
        <Route path="Account" element={<ProtectedRoute><AccountPage {...props}/></ProtectedRoute>}/>
        


      </Routes>
    );
  }
  
  export default AppRoutes;