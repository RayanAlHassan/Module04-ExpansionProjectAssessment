import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import NotFound from "../Pages/NotFound/NotFound";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("userr info from context" + user);
  const isAdmin = user && user.role === "Admin";
  console.log(isAdmin);
  return isAdmin ? children : <NotFound />;
};
export default ProtectedRoute;
