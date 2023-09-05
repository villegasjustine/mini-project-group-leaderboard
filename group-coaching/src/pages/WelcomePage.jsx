import SignIn from "../components/SignIn";
import { useUserContext } from "../context/UserContext";

export default function WelcomePage() {
  
    return (
      <div className="Welcome">
       
      <SignIn/>
      
      </div>
    );
  }
  