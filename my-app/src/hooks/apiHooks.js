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

  const postMedia = async (file, inputs, token) => {
    return await fetchData(import.meta.env.VITE_MEDIA_API + "/media", {
      method: "POST",
      body: JSON.stringify({ ...file, ...inputs }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  const deleteMedia = async (id, token) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media/" + id,
      options,
    );
  };

  const getMediaById = async (id) => {
    return await fetchData(import.meta.env.VITE_MEDIA_API + "/media/" + id);
  };

  const putMedia = async (id, inputs, token) => {
    return await fetchData(import.meta.env.VITE_MEDIA_API + "/media/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(inputs),
    });
  };

  return { mediaArray, postMedia, deleteMedia, getMediaById, putMedia };
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
    return await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login/",
      options,
    );
  };
  return { login };
};

const postFile = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const result = await fetchData(
    import.meta.env.VITE_UPLOAD_SERVER + "/upload",
    options,
  );
  return result.data;
};

const useLike = () => {
  const postLike = async (media_id, token) => {
    const likeObject = {
      media_id: media_id,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(likeObject),
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + "/likes",
      fetchOptions,
    );
  };

  const deleteLike = async (media_id, token) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return await fetchData(
      import.meta.env.VITE_MEDIA_API + "/likes/" + media_id,
      options,
    );
  };

  const getLikeCountByMediaId = (media_id) => {
    return fetchData(
      import.meta.env.VITE_MEDIA_API + "/likes/count/" + media_id,
    );
  };

  const getUserLikeByMediaId = (media_id, token) => {
    const options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return fetchData(
      import.meta.env.VITE_MEDIA_API + "/likes/bymedia/user/" + media_id,
      options,
    );
  };

  return { postLike, deleteLike, getLikeCountByMediaId, getUserLikeByMediaId };
};

export { useMedia, useUser, useAuthentication, postFile, useLike };
