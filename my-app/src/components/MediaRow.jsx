import { Link, useNavigate } from "react-router-dom";
import Button from "./UI/Button.jsx";
import PropTypes from "prop-types";
import Likes from "./Likes.jsx";

const MediaRow = ({ item, deleteMedia }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const sure = confirm("Are you sure to delete media?");
    if (!sure) return;
    const token = localStorage.getItem("token");
    const res = await deleteMedia(item.media_id, token);
    console.log("Delete res: ", res);
    navigate(0);
  };

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.username}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link
          className={"view-link"}
          to={`/media/${item.media_id}`}
          state={{ item }}
        >
          View
        </Link>
        <br />
        <br />
        <Link to={`/modify/${item.media_id}`}>Modify</Link>
        <br />
        <br />
        <Button
          text={"Delete"}
          onClick={handleDelete}
          className={"bg-red-500"}
        />
        <Likes id={item.media_id} />
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  deleteMedia: PropTypes.func.isRequired,
};

export default MediaRow;
