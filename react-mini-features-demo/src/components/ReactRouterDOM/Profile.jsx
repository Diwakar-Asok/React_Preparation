import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  }
  return(
    <div>
      <h3>Profile page</h3>
      <p>Welcome {auth.user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile;