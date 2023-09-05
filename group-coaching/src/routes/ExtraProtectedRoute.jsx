import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// wrap around logged-in user only routes to protect them
function ExtraProtectedRoute({ redirectPath = "/", children }) {
  const { currentUser } = useUserContext();

  if (currentUser.name !== 'Justine') {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}

export default ExtraProtectedRoute;
// save as routes/ProtectedRoute.jsx
