import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/apiHooks.js";

const UserContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { login } = useAuthentication();

  console.log("User in userProvider: ", user);

  const handleLogin = async (credentials) => {
    console.log({ credentials });
    try {
      const userData = await login(credentials);
      console.log("userdata: ", userData);
      localStorage.setItem("token", userData.token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
