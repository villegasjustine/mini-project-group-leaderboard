import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Home from "../pages/Home";
import ExercisesPage from "../pages/ExercisesPage";
import ProtectedRoute from "./ProtectedRoute";
import AccountPage from "../pages/AccountPage";
import SignUpPage from "../pages/SignUpPage";
import PaintPage from "../pages/PaintPage";
import ExtraProtectedRoute from "./ExtraProtectedRoute";

function AppRoutes(props) {

    return (
      <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<WelcomePage {...props} />} />
        <Route path="SignUp" element={<SignUpPage {...props} />} />
        <Route path="Home" element={<ProtectedRoute><Home {...props} /></ProtectedRoute>} />
        <Route path="Exercises" element={<ExtraProtectedRoute><ProtectedRoute><ExercisesPage {...props}/></ProtectedRoute></ExtraProtectedRoute>}/>
        <Route path="Account" element={<ProtectedRoute><AccountPage {...props}/></ProtectedRoute>}/>
        <Route path="paint" element={<ProtectedRoute><PaintPage {...props} /></ProtectedRoute>} />


      </Routes>
    );
  }
  
  export default AppRoutes;