import React from "react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Trying to send file");
    console.log("event", file);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="tiedosto"
          onChange={(event) => setFile(event.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          className={"bg-indigo-900"}
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
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
