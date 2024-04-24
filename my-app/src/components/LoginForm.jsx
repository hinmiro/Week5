// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext.jsx";

const LoginForm = ({ setToggleForm }) => {
  const { handleLogin } = useUserContext();

  const initValues = {
    username: "",
    password: "",
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    () => handleLogin(inputs),
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <div
        className={"flex justify-center items-center shadow-md min-h-screen "}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="loginuser">Username</label>
            <input
              name="username"
              type="text"
              id="loginuser"
              onChange={handleInputChange}
              autoComplete="username"
              className={"text-cyan-400 rounded-xl w-fit"}
            />
          </div>
          <div>
            <label htmlFor="loginpassword">Password</label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl w-fit"}
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
            className={"hover:text-cyan-300"}
            onClick={() => setToggleForm(false)}
          >
            Dont have account? Register here.
          </label>
        </form>
      </div>
    </>
  );
};

LoginForm.propTypes = {
  setToggleForm: PropTypes.func.isRequired,
};

export default LoginForm;
