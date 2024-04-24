import PropTypes from "prop-types";
import Single from "../views/Single.jsx";

const SingleView = (props) => {
  const { selectedItem, setSelectedItem } = props;

  return (
    <>
      <Single />
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
