import { useUserContext } from "../../contexts/UserContext.jsx";

const UserData = () => {
  const { user } = useUserContext();

  if (!user) {
    return null;
  }
  return (
    <>
      {user && (
        <>
          <div
            className={
              "shadow-xl shadow-cyan-800 flex justify-evenly font-semibold border-l-fuchsia-500 border-l-4 border-r-fuchsia-500 border-r-4 border-b-violet-600 border-b-4 rounded-lg bg-emerald-200"
            }
          >
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Created: {new Date(user.created_at).toLocaleDateString()}</p>
          </div>
        </>
      )}
    </>
  );
};

export default UserData;
