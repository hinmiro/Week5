import { useLocation, useNavigate, useParams } from "react-router-dom";
import Likes from "../components/Likes.jsx";

const Single = () => {
  const location = useLocation();
  const { state } = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  if (!location.state?.item) return null;

  const item = state.item;

  return (
    <>
      <h2 className={"text-3xl"}>ID: {params.id}</h2>

      <dialog
        className={
          "fixed top-0 h-dvh w-dvw bg-black bg-opacity-50 text-stone-100"
        }
        open={!!item}
      >
        <p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </p>
        {item && (
          <>
            {item.media_type.includes("video") ? (
              <video className={"h-3/4 m-auto"} controls>
                <source src={item.filename} type={item.media_type} />
              </video>
            ) : (
              <img
                className={"h-3/4 m-auto"}
                src={item.filename}
                alt={item.title}
              />
            )}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{new Date(item.created_at).toLocaleString("fi-FI")}</p>
            <p>{item.filesize}</p>
            <p>{item.media_type}</p>
            <Likes id={item.media_id} />
          </>
        )}
      </dialog>
    </>
  );
};

export default Single;
