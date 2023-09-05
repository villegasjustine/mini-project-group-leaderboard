import AccountInfo from "../components/AccountInfo";
import { useUserContext } from "../context/UserContext";

export default function AccountPage() {
    
    const {currentUser} = useUserContext
    return (
      <div className="AccountPage">
       
      Welcome {currentUser.name}

        
      </div>
    );
  }
  