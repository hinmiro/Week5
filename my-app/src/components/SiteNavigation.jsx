import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext.jsx";

const SiteNavigation = () => {
  const { handleLogout, user } = useUserContext();

  return (
    <div className={"shadow-cyan-800 shadow-2xl"}>
      <nav
        className={
          "flex justify-evenly text-indigo-800 bg-emerald-200 rounded-lg font-bold border-pink-600  border-b-violet-600 border-4"
        }
      >
        <Link to="/">Home 🐸</Link>
        {user && (
          <>
            <Link to="/profile">Profile 🐲</Link>
            <Link to="/upload">Upload 🦄</Link>
            <Link to="/" onClick={() => handleLogout()}>
              Logout🔓
            </Link>
          </>
        )}

        {!user && <Link to="/login">Login🔒</Link>}
      </nav>
    </div>
  );
};

export default SiteNavigation;
