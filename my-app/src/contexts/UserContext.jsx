import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication, useUser } from "../hooks/apiHooks.js";

const UserContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { login } = useAuthentication();
  const { getUserByToken } = useUser();

  console.log("User in userProvider: ", user);

  const handleLogin = async (credentials) => {
    console.log({ credentials });
    try {
      const userData = await login(credentials);
      console.log("userdata: ", userData);
      localStorage.setItem("token", userData.token);
      setUser(userData.user);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const handleAutologin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, handleLogin, handleLogout, handleAutologin }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
