import { useState } from "react";
import { useMedia, postFile } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({ title: "" });
  const token = localStorage.getItem("token");
  const { postMedia } = useMedia();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      const uploadResult = await postFile(file, token);
      const postMediaResult = await postMedia(uploadResult, inputs, token);
      console.log("postMediaResult: ", postMediaResult);
      navigate("/");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doUpload();
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className={"flex justify-center items-center"}>
        <form onSubmit={handleSubmit}>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://via.placeholder.com/200?text=Choose+image"
            }
            alt="preview"
            width="200"
          />
          <div>
            <label htmlFor="file">File</label>
            <input
              name="file"
              type="file"
              id="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              className={"rounded-lg"}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              id="title"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl"}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              rows={5}
              id="description"
              onChange={handleInputChange}
              className={"text-cyan-400 rounded-xl"}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={file && inputs.title.length > 3 ? false : true}
            className={
              "shadow-md border-4 bg-emerald-200 border-fuchsia-400 border-b-cyan-400 p-2 rounded-xl font-bold hover:bg-emerald-800 hover:text-cyan-300"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
