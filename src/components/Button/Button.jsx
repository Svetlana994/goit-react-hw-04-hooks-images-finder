import PropTypes from "prop-types";
import { LoadMoreBtn } from "./Button.styles";

function Button({ onLoad }) {
  return (
    <LoadMoreBtn type="button" onClick={onLoad}>
      Load More
    </LoadMoreBtn>
  );
}

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default Button;
