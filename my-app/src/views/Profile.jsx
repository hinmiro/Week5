import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks.js";
import { useUserContext } from "../contexts/UserContext.jsx";
import UserData from "../components/UI/UserData.jsx";

const Profile = () => {
  const { user, setUser } = useUserContext(null);
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
        <UserData />
      </div>
    </>
  );
};

export default Profile;
