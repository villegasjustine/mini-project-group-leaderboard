import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Home from "../pages/Home";
import ExercisesPage from "../pages/ExercisesPage";

function AppRoutes(props) {

    return (
      <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<WelcomePage {...props} />} />
        <Route path="Home" element={<Home {...props} />} />
        <Route path="Exercises" element={<ExercisesPage {...props}/>}/>
        
      </Routes>
    );
  }
  
  export default AppRoutes;