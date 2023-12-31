import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser === null) {
    return children;
  }
  if (authUser.role === "ADMIN") {
    return <Navigate to='/admin' />;
  } else return <Navigate to='/' />;
}
