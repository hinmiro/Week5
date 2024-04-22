import MediaRow from "../components/MediaRow.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData.js";

const Home = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    const result = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");

    const mediaWithUser = await Promise.all(
      result.map(async (item) => {
        const userResult = await fetchData(
          import.meta.env.VITE_AUTH_API + "/users/" + item.user_id,
        );
        return { ...item, username: userResult.username };
      }),
    );
    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);
  console.log(mediaArray);

  return (
    <>
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
              //      setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
