// imports

import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import { useState } from "react";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  return (
    <>
      {toggleForm ? (
        <LoginForm setToggleForm={setToggleForm} />
      ) : (
        <RegisterForm setToggleForm={setToggleForm} />
      )}
    </>
  );
};

export default Login;
