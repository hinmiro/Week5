import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks.js";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await getUserByToken(localStorage.getItem("token"));
        setUser(userData.user);
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div>
        <h1>Profile page</h1>
      </div>
      <div>
        {user && (
          <>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Created: {user.created_at}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
