import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData.js";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const { getUserById } = useUser();

  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media",
    );
    console.log("media result:", mediaResult);

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const userResult = await getUserById(mediaItem.user_id);
        return { ...mediaItem, username: userResult.username };
      }),
    );
    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);

  return { mediaArray };
};

const useUser = () => {
  const getUserById = async (id) => {
    return await fetchData(import.meta.env.VITE_AUTH_API + "/users/" + id);
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      options,
    );
  };

  const register = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + "/users", options);
  };

  return { getUserById, getUserByToken, register };
};

const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login/",
      options,
    );
    return loginResult;
  };
  return { login };
};

export { useMedia, useUser, useAuthentication };
