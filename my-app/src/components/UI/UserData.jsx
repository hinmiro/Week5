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
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Created: {new Date(user.created_at).toLocaleDateString()}</p>
        </>
      )}
    </>
  );
};

export default UserData;
