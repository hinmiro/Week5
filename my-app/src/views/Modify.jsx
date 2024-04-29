import { useMedia } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import { useEffect } from "react";

const Modify = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const { getMediaById, putMedia } = useMedia();

  const getItem = async () => {
    const itemResult = await getMediaById(id);
    setInputs({ title: itemResult.title, description: itemResult.description });
  };

  useEffect(() => {
    getItem();
  }, []);

  const initValues = {
    title: "",
    description: "",
  };

  const doModify = async () => {
    try {
      const token = localStorage.getItem("token");
      const mediaResponse = await putMedia(id, inputs, token);
      if (mediaResponse) {
        console.log(mediaResponse);
      }
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const { inputs, setInputs, handleInputChange, handleSubmit } = useForm(
    doModify,
    initValues,
  );

  return (
    <>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
            value={inputs.title}
            className={"text-cyan-400"}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
            defaultValue={inputs.description}
            className={"text-cyan-400"}
          ></textarea>
        </div>
        <Button
          type="submit"
          text="Modify"
          className={"bg-blue-500 hover:bg-emerald-200 hover:text-indigo-600"}
        />
      </form>
    </>
  );
};

export default Modify;
