import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext.jsx";

const HandleAutologin = () => {
  const { handleAutologin } = useUserContext();

  useEffect(() => {
    handleAutologin();
  }, []);
  return null;
};

export default HandleAutologin;
