import SignIn from "../components/SignIn";
import { useUserContext } from "../context/UserContext";

export default function WelcomePage() {
    // Save in pages/AboutPage.jsx
    return (
      <div className="Welcome">
        Welcome
      {/* insert Login Component here */}
      <SignIn/>
      </div>
    );
  }
  