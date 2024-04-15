import PropTypes from "prop-types";
import Button from "./UI/Button.jsx";

const SingleView = (props) => {
  const { selectedItem, setSelectedItem } = props;
  const handleClick = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <dialog
        className={
          "fixed top-0 h-dvh w-dvw bg-black bg-opacity-50 text-stone-100"
        }
        open={!!selectedItem}
      >
        <p>
          <Button text="Close" handleClick={handleClick}></Button>
        </p>
        {selectedItem && (
          <>
            {selectedItem.media_type.includes("video") ? (
              <video className={"h-3/4 m-auto"} controls>
                <source
                  src={selectedItem.filename}
                  type={selectedItem.media_type}
                />
              </video>
            ) : (
              <img
                className={"h-3/4 m-auto"}
                src={selectedItem.filename}
                alt={selectedItem.title}
              />
            )}
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>{new Date(selectedItem.created_at).toLocaleString("fi-FI")}</p>
            <p>{selectedItem.filesize}</p>
            <p>{selectedItem.media_type}</p>
          </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
