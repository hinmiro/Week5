import MediaRow from "../components/MediaRow.jsx";
import { useMedia } from "../hooks/apiHooks.js";
import UserData from "../components/UI/UserData.jsx";

const Home = () => {
  const { mediaArray, deleteMedia } = useMedia();
  console.log(mediaArray);

  return (
    <>
      <UserData />
      <h4 className={"m-10"}>My Media</h4>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              deleteMedia={deleteMedia}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
