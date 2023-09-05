import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignoutButton() {
    const { currentUser, handleUpdateUser } = useUserContext(); 
    const navigate = useNavigate();
    const handleSignout = () => {
      
      handleUpdateUser(null);
      navigate('/')
    };
  
    return (
      <button onClick={handleSignout}>
        Sign Out
      </button>
      
    );
  }
  
  export default SignoutButton;
  