import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLike } from "../hooks/apiHooks";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Likes = ({ id }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);

  const { getLikeCountByMediaId, getUserLikeByMediaId, postLike, deleteLike } =
    useLike();

  const fetchLikeCount = async () => {
    try {
      const countResponse = await getLikeCountByMediaId(id);
      setLikeCount(countResponse.count);
    } catch (e) {
      // console.error(e.message);
      setLikeCount(0);
    }
  };

  const fetchUserLike = async () => {
    try {
      const token = localStorage.getItem("token");
      const userLikeResponse = await getUserLikeByMediaId(id, token);
      setUserLike(userLikeResponse);
    } catch (e) {
      // console.error(e.message);
      setUserLike(null);
    }
  };

  useEffect(() => {
    fetchLikeCount();
    fetchUserLike();
  }, []);

  console.log(userLike, likeCount);

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    try {
      if (userLike) {
        await deleteLike(userLike.like_id, token);
      } else {
        // like
        const likeResponse = await postLike(id, token);
      }
    } catch (e) {
      // console.error(e.message);
    } finally {
      fetchLikeCount();
      fetchUserLike();
    }
  };
  return (
    <div className={"flex justify-center"}>
      <p>{likeCount}</p>
      <button
        className={"hover:bg-transparent hover:scale-y-150"}
        onClick={handleLike}
      >
        {userLike ? <FcDislike /> : <FcLike />}
      </button>
    </div>
  );
};

Likes.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Likes;
