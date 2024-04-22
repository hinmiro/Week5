// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoginForm = ({ setToggleForm }) => {
  const navigate = useNavigate();
  const { login } = useAuthentication();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      const userData = await login(inputs);
      console.log("doLogin userdata: ", userData);
      localStorage.setItem("token", userData.token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className={
            "p-2 rounded-lg text-blue-950 border-4 border-b-violet-600 border-cyan-400 bg-emerald-300 hover:bg-cyan-700 hover:text-blue-300"
          }
          type="submit"
        >
          Login
        </button>
        <label
          className={"hover:text-fuchsia-700"}
          onClick={() => setToggleForm(false)}
        >
          Dont have account? Register here.
        </label>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  setToggleForm: PropTypes.func.isRequired,
};

export default LoginForm;
