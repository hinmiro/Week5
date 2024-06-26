import useForm from "../hooks/formHooks.js";
import { useUser } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router-dom";
import Login from "../views/Login.jsx";
import PropTypes from "prop-types";

const RegisterForm = ({ setToggleForm }) => {
  const navigate = useNavigate();
  const { register } = useUser();

  const initValues = {
    username: "",
    password: "",
  };

  const doRegister = async () => {
    try {
      const userData = await register(inputs);
      console.log("doRegister userdata: ", userData);
      localStorage.setItem("token", userData.token);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <div
        className={"flex justify-center items-center shadow-md min-h-screen"}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="registeruser">Username</label>
            <input
              name="username"
              type="text"
              id="registeruser"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl"}
            />
          </div>
          <div>
            <label htmlFor="registerpassword">Password</label>
            <input
              name="password"
              type="password"
              id="registerpassword"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl"}
            />
          </div>
          <div>
            <label htmlFor="registeremail">Email</label>
            <input
              name="email"
              type="text"
              id="registeremail"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl"}
            />
          </div>
          <button
            className={
              "p-2 rounded-lg text-blue-950 border-4 border-b-violet-600 border-cyan-400 bg-emerald-300 hover:bg-cyan-700 hover:text-blue-300"
            }
            type="submit"
          >
            Register
          </button>
          <label
            className={"hover:text-cyan-300 text-m"}
            onClick={() => setToggleForm(true)}
          >
            Login from here.
          </label>
        </form>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  setToggleForm: PropTypes.func.isRequired,
};

export default RegisterForm;
