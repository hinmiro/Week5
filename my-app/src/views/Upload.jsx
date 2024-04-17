import React from "react";
import { useState } from "react";
import { data } from "autoprefixer";

const Upload = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Trying to send file");
    const postData = {
      cat_name: "kisuli",
      weight: 3,
      owner: 1,
      filename: file,
      birthdate: "2021-11-01",
    };
    const formData = new FormData();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NCwibmFtZSI6IlNpbmkiLCJ1c2VybmFtZSI6IlNpbnp1IiwiZW1haWwiOiJhbm9ueW1vdXNAYXNkLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEzMzU0OTY4LCJleHAiOjE3MTM0NDEzNjh9.EGBeZiDXCQ3WTw9c-k8BP1RFGFCbzEw3pHGy5i9SH5c";
    const response = await fetch("http://localhost:3000/api/v1/cats/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (response.ok) console.log("File uploaded");
    else console.log("Upload failed");
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    if (!file) {
      setFile(null);
      setPreviewUrl("");
    }
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {previewUrl && <img src={previewUrl} alt="Preview" />}

        <input type="file" name="tiedosto" onChange={handleFileChange} />
        <label htmlFor="name">Name</label>
        <input
          className={"bg-indigo-900"}
          type="text"
          name="name"
          onChange={(event) => setName(name)}
        />
        <button
          className={
            "bg-cyan-600 border-2 rounded-lg p-2 hover:bg-cyan-300 text-neutral-950"
          }
          type="submit"
        >
          Upload file
        </button>
      </form>
    </div>
  );
};

export default Upload;
